using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using PORFOLIO.Data;
using PORFOLIO.models;
using PORFOLIO.DTOs;
using PORFOLIO.Services;

namespace PORFOLIO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly MongoDbContext _context;
        private readonly CloudinaryService _cloudinary;

        public ProjectsController(
            MongoDbContext context,
            CloudinaryService cloudinary)
        {
            _context = context;
            _cloudinary = cloudinary;
        }

        // GET: api/projects
        [HttpGet]
        public async Task<IActionResult> GetProjects()
        {
            var projects = await _context.Projects
                .Find(_ => true)
                .ToListAsync();

            return Ok(projects);
        }

        // GET: api/projects/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProject(string id)
        {
            var project = await _context.Projects
                .Find(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (project == null)
                return NotFound("Project not found");

            return Ok(project);
        }

        // POST: api/projects
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> CreateProject(
            [FromForm] ProjectCreateDto dto)
        {
            string? imageUrl = null;

            try
            {
                if (dto.Image != null)
                {
                    imageUrl =
                        await _cloudinary.UploadImageAsync(dto.Image);
                }
            }
            catch
            {
                imageUrl = null;
            }

            var project = new Project
            {
                Title = dto.Title,
                Description = dto.Description,
                GithubUrl = dto.GithubUrl,
                LiveUrl = dto.LiveUrl,
                Technologies = dto.Technologies,
                ImageUrl = imageUrl
            };

            await _context.Projects.InsertOneAsync(project);

            return Ok(project);
        }

        // PUT: api/projects/{id}
        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> UpdateProject(
            string id,
            [FromForm] ProjectCreateDto dto)
        {
            var project = await _context.Projects
                .Find(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (project == null)
                return NotFound("Project not found");

            try
            {
                if (dto.Image != null)
                {
                    project.ImageUrl =
                        await _cloudinary.UploadImageAsync(dto.Image);
                }
            }
            catch
            {
                // keep old image
            }

            project.Title = dto.Title;
            project.Description = dto.Description;
            project.GithubUrl = dto.GithubUrl;
            project.LiveUrl = dto.LiveUrl;
            project.Technologies = dto.Technologies;

            await _context.Projects.ReplaceOneAsync(
                x => x.Id == id,
                project);

            return Ok(project);
        }

        // DELETE: api/projects/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(string id)
        {
            var result = await _context.Projects
                .DeleteOneAsync(x => x.Id == id);

            if (result.DeletedCount == 0)
                return NotFound("Project not found");

            return NoContent();
        }
    }
}