using Microsoft.AspNetCore.Mvc;

namespace PORFOLIO.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CvController : ControllerBase
{
    [HttpPost("upload-image")]
    public async Task<IActionResult> UploadImage(IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file selected");

        var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);

        var folderPath = Path.Combine(
            Directory.GetCurrentDirectory(),
            "wwwroot",
            "uploads",
            "images");

        if (!Directory.Exists(folderPath))
            Directory.CreateDirectory(folderPath);

        var filePath = Path.Combine(folderPath, fileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        return Ok(new
        {
            imageUrl = $"/uploads/images/{fileName}"
        });
    }
}