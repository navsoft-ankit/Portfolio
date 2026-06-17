using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PORFOLIO.models;

public class Service
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    public string Name { get; set; }
    public string Description { get; set; }
}