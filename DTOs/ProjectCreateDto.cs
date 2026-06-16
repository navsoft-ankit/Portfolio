using Microsoft.AspNetCore.Http;

namespace PORFOLIO.DTOs
{
    public class ProjectCreateDto
    {
        public string? Title { get; set; }

        public string? Description { get; set; }

        public string? GithubUrl { get; set; }

        public string? LiveUrl { get; set; }

        public string? Technologies { get; set; }

        public IFormFile? Image { get; set; }
    }
}