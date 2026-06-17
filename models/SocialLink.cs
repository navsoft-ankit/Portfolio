using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PORFOLIO.models;

public class SocialLink
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    public string Platform { get; set; }
    public string Url { get; set; }
    public string Icon { get; set; }
}