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

        public async Task<string> UploadImageAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                throw new Exception("Empty file");

            using var stream = file.OpenReadStream();

            var uploadParams = new ImageUploadParams
            {
                File = new FileDescription(file.FileName, stream),
                Folder = "portfolio"
            };

            var result = await _cloudinary.UploadAsync(uploadParams);

            if (result == null || string.IsNullOrEmpty(result.SecureUrl?.ToString()))
                throw new Exception("Cloudinary upload failed");

            return result.SecureUrl.ToString();
        }
    }
}