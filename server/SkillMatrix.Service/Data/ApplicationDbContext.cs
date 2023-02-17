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

        public DbSet<BusinessUnit> BusinessUnit { get; set; }

        public DbSet<Designation> Designation { get; set; }

        public DbSet<Location> Location { get; set; }

        public DbSet<Team> Team { get; set; }
    }
}
