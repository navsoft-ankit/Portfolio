using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PORFOLIO.models;

public class Profile
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    public string Name { get; set; }
    public string Title { get; set; }
    public string Bio { get; set; }
    public string ProfileImage { get; set; }
    public string CvUrl { get; set; }
    public string Email { get; set; }
    public string GithubUrl { get; set; }
    public string LinkedinUrl { get; set; }
}