using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PORFOLIO.Data;
using PORFOLIO.models;

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
        public async Task<ActionResult<Profile>> CreateProfile(Profile profile)
        {
            _context.Profiles.Add(profile);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetProfile),
                new { id = profile.Id },
                profile
            );
        }

        // PUT: api/profile/1
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProfile(int id, Profile updatedProfile)
        {
            var profile = await _context.Profiles.FindAsync(id);

            if (profile == null)
            {
                return NotFound("Profile not found.");
            }

            profile.Name = updatedProfile.Name;
            profile.Title = updatedProfile.Title;
            profile.Bio = updatedProfile.Bio;
            profile.Email = updatedProfile.Email;
            profile.GithubUrl = updatedProfile.GithubUrl;
            profile.LinkedinUrl = updatedProfile.LinkedinUrl;

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