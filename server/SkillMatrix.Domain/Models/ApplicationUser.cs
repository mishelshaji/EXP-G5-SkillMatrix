using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Domain.Models
{
    public class ApplicationUser: IdentityUser
    {
        public String Name { get; set; }

        public DateTime DateOfBirth { get; set; }

        public int RoleId { get; set; }

        public Role Role { get; set; }

        public int TeamId { get; set; }

        public Team Team { get; set; }

        public int BusinessUnitId { get; set; }

        public BusinessUnit BusinessUnit { get; set; }

        public int LocattionId { get; set; }

        public Location Location { get; set; }

        public int CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public int ModifiedBy { get; set;}

        public DateTime ModifiedDate { get; set; }

    }
}
