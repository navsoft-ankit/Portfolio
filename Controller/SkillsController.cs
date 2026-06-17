using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using PORFOLIO.Data;
using PORFOLIO.models;

namespace PORFOLIO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillsController : ControllerBase
    {
        private readonly MongoDbContext _context;

        public SkillsController(MongoDbContext context)
        {
            _context = context;
        }

        // GET: api/skills
        [HttpGet]
        public async Task<IActionResult> GetSkills()
        {
            var skills = await _context.Skills
                .Find(_ => true)
                .ToListAsync();

            return Ok(skills);
        }

        // POST: api/skills
        [HttpPost]
        public async Task<IActionResult> CreateSkill(Skill skill)
        {
            await _context.Skills.InsertOneAsync(skill);
            return Ok(skill);
        }

        // PUT: api/skills/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSkill(string id, Skill updated)
        {
            var skill = await _context.Skills
                .Find(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (skill == null)
                return NotFound();

            skill.Name = updated.Name;
            skill.Percentage = updated.Percentage;

            await _context.Skills.ReplaceOneAsync(
                x => x.Id == id,
                skill
            );

            return Ok(skill);
        }

        // DELETE: api/skills/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkill(string id)
        {
            var result = await _context.Skills
                .DeleteOneAsync(x => x.Id == id);

            if (result.DeletedCount == 0)
                return NotFound();

            return NoContent();
        }
    }
}