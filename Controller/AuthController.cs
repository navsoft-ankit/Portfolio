using Microsoft.AspNetCore.Mvc;
using PORFOLIO.Data;
using PORFOLIO.DTOs;

namespace PORFOLIO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        public AuthController(AppDbContext context)
        {
           _context = context;
        }
        [HttpPost("login")]
        public IActionResult Login(LoginDTO model)
        {
            var admin = _context.Admin.FirstOrDefault(x =>
                x.Username == model.Username &&
                x.PasswordHash == model.Password &&
                x.Email == model.Email
                );

            if (admin == null)
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
