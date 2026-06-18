using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using PORFOLIO.Data;
using PORFOLIO.models;
using PORFOLIO.DTOs;

namespace PORFOLIO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly MongoDbContext _context;

        public ContactController(MongoDbContext context)
        {
            _context = context;
        }

        // GET: api/contact
        [HttpGet]
        public async Task<IActionResult> GetMessages()
        {
            var messages = await _context.ContactMessages
                .Find(_ => true)
                .ToListAsync();

            return Ok(messages);
        }

        // POST: api/contact
[HttpPost]
public async Task<IActionResult> SendMessage([FromBody] ContactDto dto)
{
    var message = new ContactMessage
    {
        Name = dto.Name,
        Email = dto.Email,
        Message = dto.Message,
        CreatedAt = DateTime.UtcNow
    };

    await _context.ContactMessages.InsertOneAsync(message);

    return Ok(message);
}

        // DELETE: api/contact/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessage(string id)
        {
            var result = await _context.ContactMessages
                .DeleteOneAsync(x => x.Id == id);

            if (result.DeletedCount == 0)
                return NotFound();

            return NoContent();
        }
    }
}