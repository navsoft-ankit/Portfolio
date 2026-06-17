using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;
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

        public ProjectsController(MongoDbContext context, CloudinaryService cloudinary)
        {
            _context = context;
            _cloudinary = cloudinary;
        }

        // =========================
        // GET ALL PROJECTS
        // =========================
        [HttpGet]
        public async Task<IActionResult> GetProjects()
        {
            var projects = await _context.Projects
                .Find(_ => true)
                .ToListAsync();

            return Ok(projects);
        }

        // =========================
        // GET PROJECT BY ID
        // =========================
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

        // =========================
        // CREATE PROJECT
        // =========================
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> CreateProject([FromForm] ProjectCreateDto dto)
        {
            string? imageUrl = null;

            try
            {
                if (dto.Image != null)
                    imageUrl = await _cloudinary.UploadImageAsync(dto.Image);
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

        // =========================
        // UPDATE PROJECT
        // =========================
        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> UpdateProject(string id, [FromForm] ProjectCreateDto dto)
        {
            var project = await _context.Projects
                .Find(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (project == null)
                return NotFound("Project not found");

            try
            {
                if (dto.Image != null)
                    project.ImageUrl = await _cloudinary.UploadImageAsync(dto.Image);
            }
            catch
            {
                // keep old image if upload fails
            }

            project.Title = dto.Title;
            project.Description = dto.Description;
            project.GithubUrl = dto.GithubUrl;
            project.LiveUrl = dto.LiveUrl;
            project.Technologies = dto.Technologies;

            await _context.Projects.ReplaceOneAsync(x => x.Id == id, project);

            return Ok(project);
        }

        // =========================
        // DELETE PROJECT
        // =========================
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(string id)
        {
            var result = await _context.Projects.DeleteOneAsync(x => x.Id == id);

            if (result.DeletedCount == 0)
                return NotFound("Project not found");

            return NoContent();
        }
    }
}