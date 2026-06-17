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
    public class ProfileController : ControllerBase
    {
        private readonly MongoDbContext _context;
        private readonly CloudinaryService _cloudinary;

        public ProfileController(MongoDbContext context, CloudinaryService cloudinary)
        {
            _context = context;
            _cloudinary = cloudinary;
        }

        // GET: api/profile
        [HttpGet]
        public async Task<IActionResult> GetProfile()
        {
            var profile = await _context.Profiles
                .Find(_ => true)
                .FirstOrDefaultAsync();

            if (profile == null)
                return NotFound("Profile not found.");

            return Ok(profile);
        }

        // POST: api/profile
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> CreateProfile([FromForm] ProfileCreateDto dto)
        {
            if (dto.Image == null)
                return BadRequest("Profile image is required.");

            var imageUrl = await _cloudinary.UploadImageAsync(dto.Image);

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

            await _context.Profiles.InsertOneAsync(profile);

            return Ok(profile);
        }

        // PUT: api/profile/{id}
        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> UpdateProfile(string id, [FromForm] ProfileCreateDto dto)
        {
            var profile = await _context.Profiles
                .Find(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (profile == null)
                return NotFound("Profile not found.");

            profile.Name = dto.Name;
            profile.Title = dto.Title;
            profile.Bio = dto.Bio;
            profile.Email = dto.Email;
            profile.GithubUrl = dto.GithubUrl;
            profile.LinkedinUrl = dto.LinkedinUrl;
            profile.CvUrl = dto.CvUrl;

            if (dto.Image != null)
            {
                var imageUrl = await _cloudinary.UploadImageAsync(dto.Image);
                profile.ProfileImage = imageUrl;
            }

            await _context.Profiles.ReplaceOneAsync(
                x => x.Id == id,
                profile
            );

            return Ok(profile);
        }

        // DELETE: api/profile/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(string id)
        {
            var result = await _context.Profiles
                .DeleteOneAsync(x => x.Id == id);

            if (result.DeletedCount == 0)
                return NotFound("Profile not found.");

            return NoContent();
        }
    }
}