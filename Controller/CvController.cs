using Microsoft.AspNetCore.Mvc;

namespace PORFOLIO.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CvController : ControllerBase
{
    private readonly IConfiguration _config;

    public CvController(IConfiguration config)
    {
        _config = config;
    }

    [HttpPost("upload")]
    public async Task<IActionResult> UploadCv([FromForm] IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file selected");

        var ext = Path.GetExtension(file.FileName).ToLower();
        if (ext != ".pdf")
            return BadRequest("Only PDF allowed");

        var folderPath = Path.Combine(
            Directory.GetCurrentDirectory(),
            "wwwroot",
            "uploads",
            "cv"
        );

        if (!Directory.Exists(folderPath))
            Directory.CreateDirectory(folderPath);

        var fileName = "cv.pdf";
        var filePath = Path.Combine(folderPath, fileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        var baseUrl = _config["BaseUrl"];

        return Ok(new
        {
            message = "CV uploaded successfully",
            cvUrl = $"{baseUrl}/uploads/cv/{fileName}"
        });
    }

    [HttpGet("get")]
    public IActionResult GetCv()
    {
        var baseUrl = _config["BaseUrl"];

        return Ok(new
        {
            cvUrl = $"{baseUrl}/uploads/cv/cv.pdf"
        });
    }

    [HttpGet("check")]
    public IActionResult CheckCv()
    {
        var filePath = Path.Combine(
            Directory.GetCurrentDirectory(),
            "wwwroot",
            "uploads",
            "cv",
            "cv.pdf"
        );

        if (System.IO.File.Exists(filePath))
        {
            return Ok(new
            {
                exists = true,
                message = "CV file still exists on server"
            });
        }

        return NotFound(new
        {
            exists = false,
            message = "CV file is missing"
        });
    }
}