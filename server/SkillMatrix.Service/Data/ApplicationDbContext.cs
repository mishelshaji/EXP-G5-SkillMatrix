using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Service.Data
{
    public class ApplicationDbContext: IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        public DbSet<Category> Category { get; set; }

        public DbSet<Skill> Skills { get; set; }

        public DbSet<Certificate> Certificate { get; set; }

        public DbSet<UserSkill> UserSkill { get; set; }

        public DbSet<UserCertificate> UserCertificate { get; set; }

        public DbSet<BusinessUnit> BusinessUnit { get; set; }

        public DbSet<Designation> Designation { get; set; }

        public DbSet<Location> Location { get; set; }

        public DbSet<Team> Team { get; set; }
    }
}

