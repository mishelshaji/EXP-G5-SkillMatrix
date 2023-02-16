using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Domain.Models
{
    public class ApplicationUser: IdentityUser
    {
        public string Name { get; set; }

        public DateTime DateOfBirth { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int DesignationId { get; set; }

        public Designation Designation { get; set; }

        public int TeamId { get; set; }

        public Team Team { get; set; }

        public BusinessUnit? BusinessUnit { get; set; }

        public int LocationId { get; set; }

        public Location Location { get; set; }

        public int CreatedBy { get; set; }

        public int ModifiedBy { get; set; }

    }
}
