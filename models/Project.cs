using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PORFOLIO.models;

public class Project
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public string? GithubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public string? Technologies { get; set; }
}