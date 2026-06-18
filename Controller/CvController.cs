using Microsoft.AspNetCore.Mvc;
using PORFOLIO.Services;

namespace PORFOLIO.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CvController : ControllerBase
{
    private readonly CloudinaryService _cloudinary;
    public CvController(CloudinaryService cloudinary)
    {
        _cloudinary = cloudinary;
    }

    [HttpPost("upload")]
    public async Task<IActionResult> UploadCv([FromForm] IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file selected");

        var ext = Path.GetExtension(file.FileName).ToLower();
        if (ext != ".pdf")
            return BadRequest("Only PDF allowed");

        var url = await _cloudinary.UploadPdfAsync(file);

        return Ok(new
        {
            message = "CV uploaded successfully",
            cvUrl = url
        });
    }
}