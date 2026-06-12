using Microsoft.EntityFrameworkCore;
using PORFOLIO.models;

namespace PORFOLIO.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Admin { get; set; }

        public DbSet<Profile> Profiles { get; set; }

        public DbSet<Project> Projects { get; set; }

        public DbSet<Service> Services { get; set; }

        public DbSet<SocialLink> SocialLinks { get; set; }

        public DbSet<ContactMessage> ContactMessages { get; set; }

        public DbSet<Skill> Skills { get; set; }
    }
}