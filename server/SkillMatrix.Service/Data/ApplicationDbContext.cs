using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Service.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>().HasData(
                new IdentityRole { Id = "c1c3df32-fc04-44e5-82ec-496b16bd060b", ConcurrencyStamp = "c1c3df32-fc04-44e5-82ec-496b16bd060b", Name = "Admin", NormalizedName = "Admin" },
                new IdentityRole { Id = "c1c3df32-fc04-44e5-82ec-496b16bd060c", ConcurrencyStamp = "c1c3df32-fc04-44e5-82ec-496b16bd060c", Name = "User", NormalizedName = "USER" }
                );
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        public DbSet<BusinessUnit> BusinessUnits { get; set; }

        public DbSet<Designation> Designations { get; set; }

        public DbSet<Location> Locations { get; set; }

        public DbSet<Team> Teams { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Skill> Skills { get; set; }

        public DbSet<UserSkill> UserSkills { get; set; }
    }
}
