using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using PORFOLIO.Data;
using PORFOLIO.models;
using PORFOLIO.DTOs;

namespace PORFOLIO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly MongoDbContext _context;

        public ProjectsController(MongoDbContext context)
        {
            _context = context;
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
                return NotFound();

            return Ok(project);
        }

        // POST: api/projects
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> CreateProject([FromForm] ProjectCreateDto dto)
        {
            string? imageUrl = null;

            if (dto.Image != null)
            {
                var folderPath = Path.Combine(
                    Directory.GetCurrentDirectory(),
                    "wwwroot",
                    "images"
                );

                if (!Directory.Exists(folderPath))
                    Directory.CreateDirectory(folderPath);

                var fileName =
                    Guid.NewGuid() + Path.GetExtension(dto.Image.FileName);

                var filePath = Path.Combine(folderPath, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await dto.Image.CopyToAsync(stream);
                }

                imageUrl = "/images/" + fileName;
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
        public async Task<IActionResult> UpdateProject(string id, Project updated)
        {
            var project = await _context.Projects
                .Find(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (project == null)
                return NotFound();

            project.Title = updated.Title;
            project.Description = updated.Description;
            project.GithubUrl = updated.GithubUrl;
            project.ImageUrl = updated.ImageUrl;
            project.Technologies = updated.Technologies;

            await _context.Projects.ReplaceOneAsync(
                x => x.Id == id,
                project
            );

            return Ok(project);
        }

        // DELETE: api/projects/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(string id)
        {
            var result = await _context.Projects
                .DeleteOneAsync(x => x.Id == id);

            if (result.DeletedCount == 0)
                return NotFound();

            return NoContent();
        }
    }
}