using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace PORFOLIO.Services
{
    public class CloudinaryService
    {
        private readonly Cloudinary _cloudinary;

        public CloudinaryService(IConfiguration config)
        {
            var account = new Account(
                config["Cloudinary:CloudName"],
                config["Cloudinary:ApiKey"],
                config["Cloudinary:ApiSecret"]
            );

            _cloudinary = new Cloudinary(account);
        }

        // ✅ IMAGE UPLOAD (profile, project image)
        public async Task<string> UploadImageAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                throw new Exception("Empty file");

            using var stream = file.OpenReadStream();

            var uploadParams = new ImageUploadParams
            {
                File = new FileDescription(file.FileName, stream),
                Folder = "portfolio/images"
            };

            var result = await _cloudinary.UploadAsync(uploadParams);

            if (string.IsNullOrEmpty(result.SecureUrl?.ToString()))
                throw new Exception("Image upload failed");

            return result.SecureUrl.ToString();
        }

        // ✅ PDF / CV UPLOAD (IMPORTANT FIX)
        public async Task<string> UploadPdfAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                throw new Exception("Empty file");

            using var stream = file.OpenReadStream();
            var uploadParams = new RawUploadParams
            {
                File = new FileDescription(file.FileName, stream),
                Folder = "portfolio/cv",
                PublicId = "cv",
                UseFilename = false,
                UniqueFilename = false,
                Overwrite = true
            };

            var result = await _cloudinary.UploadAsync(uploadParams);

            if (string.IsNullOrEmpty(result.SecureUrl?.ToString()))
                throw new Exception("PDF upload failed");

            return result.SecureUrl.ToString();
        }
    }
}