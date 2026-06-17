using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using PORFOLIO.DTOs;
using PORFOLIO.models;
using PORFOLIO.Data;

namespace PORFOLIO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly MongoDbContext _context;

        public AuthController(MongoDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDTO model)
        {
            var admin = _context.Admin.Find(x =>
                x.Username == model.Username &&
                x.Email == model.Email
            ).FirstOrDefault();

            
            if (admin == null || admin.PasswordHash != model.Password)
            {
                return Unauthorized(new
                {
                    Message = "Invalid Username or Password"
                });
            }

            return Ok(new
            {
                Message = "Login Successful"
            });
        }
    }
}