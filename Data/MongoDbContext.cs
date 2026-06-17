using MongoDB.Driver;
using PORFOLIO.models;

namespace PORFOLIO.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _db;

        public MongoDbContext(IConfiguration config)
        {
            var client = new MongoClient(
                config.GetConnectionString("MongoDb")
            );

            _db = client.GetDatabase("PortfolioDb");
        }

        public IMongoCollection<User> Admin =>
            _db.GetCollection<User>("Admin");

        public IMongoCollection<Profile> Profiles =>
            _db.GetCollection<Profile>("Profiles");

        public IMongoCollection<Project> Projects =>
            _db.GetCollection<Project>("Projects");

        public IMongoCollection<Service> Services =>
            _db.GetCollection<Service>("Services");

        public IMongoCollection<SocialLink> SocialLinks =>
            _db.GetCollection<SocialLink>("SocialLinks");

        public IMongoCollection<ContactMessage> ContactMessages =>
            _db.GetCollection<ContactMessage>("ContactMessages");

        public IMongoCollection<Skill> Skills =>
            _db.GetCollection<Skill>("Skills");
    }
}