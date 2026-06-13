using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PORFOLIO.Data;
using PORFOLIO.models;

namespace PORFOLIO.Controllers;

[ApiController]
[Route("api/[controller]")]

public class CvController : ControllerBase
{
    private readonly AppDbContext _context;

    public CvController(AppDbContext context)
    {
        _context = context;
    }

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
