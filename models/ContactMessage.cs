using Microsoft.AspNetCore.Http.HttpResults;

namespace PORFOLIO.models;
public class ContactMessage
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Message { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}