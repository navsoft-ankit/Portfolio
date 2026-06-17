using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PORFOLIO.models;

public class Skill
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string Name { get; set; }
    public int Percentage { get; set; }
}