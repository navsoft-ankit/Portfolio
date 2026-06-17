using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PORFOLIO.Data;
using PORFOLIO.models;
using PORFOLIO.DTOs;
namespace PORFOLIO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProfileController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/profile
        [HttpGet]
        public async Task<ActionResult<Profile>> GetProfile()
        {
            var profile = await _context.Profiles.FirstOrDefaultAsync();

            if (profile == null)
            {
                return NotFound("Profile not found.");
            }

            return Ok(profile);
        }

        // POST: api/profile
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<Profile>> CreateProfile([FromForm] ProfileCreateDto dto)
        {
            if (dto.Image == null)
            {
                return BadRequest("Profile image is required.");
            }

            string? imageUrl = null;

            var folderPath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "wwwroot",
                "images"
            );

            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var fileName =
                Guid.NewGuid().ToString() +
                Path.GetExtension(dto.Image.FileName);

            var filePath = Path.Combine(folderPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await dto.Image.CopyToAsync(stream);
            }

            imageUrl = "/images/" + fileName;

            var profile = new Profile
            {
                Name = dto.Name,
                Title = dto.Title,
                Bio = dto.Bio,
                CvUrl = dto.CvUrl,
                Email = dto.Email,
                GithubUrl = dto.GithubUrl,
                LinkedinUrl = dto.LinkedinUrl,
                ProfileImage = imageUrl
            };

            _context.Profiles.Add(profile);

            await _context.SaveChangesAsync();

            return Ok(profile);
        }

        // PUT: api/profile/1
        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> UpdateProfile(
            int id,
            [FromForm] ProfileCreateDto dto)
        {
            var profile = await _context.Profiles.FindAsync(id);

            if (profile == null)
            {
                return NotFound("Profile not found.");
            }

            profile.Name = dto.Name;
            profile.Title = dto.Title;
            profile.Bio = dto.Bio;
            profile.Email = dto.Email;
            profile.GithubUrl = dto.GithubUrl;
            profile.LinkedinUrl = dto.LinkedinUrl;
            profile.CvUrl = dto.CvUrl;

            if (dto.Image != null)
            {
                var folderPath = Path.Combine(
                    Directory.GetCurrentDirectory(),
                    "wwwroot",
                    "images"
                );

                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }

                var fileName =
                    Guid.NewGuid().ToString() +
                    Path.GetExtension(dto.Image.FileName);

                var filePath = Path.Combine(folderPath, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await dto.Image.CopyToAsync(stream);
                }

                profile.ProfileImage = "/images/" + fileName;
            }

            await _context.SaveChangesAsync();

            return Ok(profile);
        }

        // DELETE: api/profile/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(int id)
        {
            var profile = await _context.Profiles.FindAsync(id);

            if (profile == null)
            {
                return NotFound("Profile not found.");
            }

            _context.Profiles.Remove(profile);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}