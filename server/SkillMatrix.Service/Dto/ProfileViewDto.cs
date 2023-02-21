using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Service.Dto
{
    public class ProfileViewDto
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public int BusinessUnitId { get; set; }

        public BusinessUnitViewDto BusinessUnit { get; set; }

        public int DesignationId { get; set; }

        public DesignationViewDto Designation { get; set;}

        public int TeamId { get; set; }

        public TeamViewDto Team { get; set; }

        public int LocationId { get; set; }

        public LocationViewDto Location { get; set;}
    }

}