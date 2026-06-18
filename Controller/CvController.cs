using Microsoft.AspNetCore.Mvc;

namespace PORFOLIO.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CvController : ControllerBase
{
    // UPLOAD CV (Admin only)
    [HttpPost("upload")]
    public async Task<IActionResult> UploadCv(IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file selected");

        // only PDF allowed
        var ext = Path.GetExtension(file.FileName).ToLower();
        if (ext != ".pdf")
            return BadRequest("Only PDF allowed");

        var folderPath = Path.Combine(
            Directory.GetCurrentDirectory(),
            "wwwroot",
            "uploads",
            "cv");

        if (!Directory.Exists(folderPath))
            Directory.CreateDirectory(folderPath);

        // always overwrite latest CV
        var fileName = "cv.pdf";
        var filePath = Path.Combine(folderPath, fileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        return Ok(new
        {
            message = "CV uploaded successfully",
            cvUrl = $"/uploads/cv/{fileName}"
        });
    }

    // GET CV (Portfolio use)
    [HttpGet("get")]
    public IActionResult GetCv()
    {
        return Ok(new
        {
            cvUrl = "/uploads/cv/cv.pdf"
        });
    }
}