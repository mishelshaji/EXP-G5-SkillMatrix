using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Service.Dto
{
    public class UserCreateDto
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Password { get; set; }

        public DateTime DateOfBirth { get; set; }

        public int DesignationId { get; set; }

        public int TeamId { get; set; }

        public int BusinessUnitId { get; set; }

        public int LocationId { get; set; }
    }
}
