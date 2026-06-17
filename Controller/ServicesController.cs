using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using PORFOLIO.Data;
using PORFOLIO.models;

namespace PORFOLIO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ServicesController : ControllerBase
    {
        private readonly MongoDbContext _context;

        public ServicesController(MongoDbContext context)
        {
            _context = context;
        }

        // GET: api/services
        [HttpGet]
        public async Task<IActionResult> GetServices()
        {
            var services = await _context.Services
                .Find(_ => true)
                .ToListAsync();

            return Ok(services);
        }

        // POST: api/services
        [HttpPost]
        public async Task<IActionResult> CreateService(Service service)
        {
            await _context.Services.InsertOneAsync(service);
            return Ok(service);
        }

        // PUT: api/services/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateService(string id, Service updated)
        {
            var service = await _context.Services
                .Find(x => x.Id == id)
                .FirstOrDefaultAsync();

            if (service == null)
                return NotFound();

            service.Name = updated.Name;
            service.Description = updated.Description;

            await _context.Services.ReplaceOneAsync(
                x => x.Id == id,
                service
            );

            return Ok(service);
        }

        // DELETE: api/services/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteService(string id)
        {
            var result = await _context.Services
                .DeleteOneAsync(x => x.Id == id);

            if (result.DeletedCount == 0)
                return NotFound();

            return NoContent();
        }
    }
}