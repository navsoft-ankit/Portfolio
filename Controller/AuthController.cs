using Microsoft.AspNetCore.Mvc;
using PORFOLIO.DTOs;

namespace PORFOLIO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login(LoginDTO model)
        {
            if (model.Username == "Ankit" &&

                model.Email == "ankit@gmail.com" &&

                model.Password == "Ankit123")
            {
                return Ok(new
                {
                    Message = "Login Successful"
                });
            }

            return Unauthorized(new
            {
                Message = "Invalid Username or Password"
            });
        }
    }
}