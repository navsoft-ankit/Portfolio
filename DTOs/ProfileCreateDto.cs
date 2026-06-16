using Microsoft.AspNetCore.Http;

namespace PORFOLIO.DTOs
{
    public class ProfileCreateDto
    {
        public string? Name { get; set; }

        public string? Title { get; set; }

        public string? Bio { get; set; }

        public string? CvUrl { get; set; }

        public string? Email { get; set; }

        public string? GithubUrl { get; set; }

        public string? LinkedinUrl { get; set; }

        public IFormFile? Image { get; set; }
    }
}