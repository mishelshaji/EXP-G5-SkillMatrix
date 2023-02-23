using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SkillMatrix.Domain.Types;

namespace SkillMatrix.Service.Dto
{
    public class UserSkillViewDto
    {
        public int Id { get; set; }

        public SkillTypes SkillType { get; set; }

        public Proficiencies Proficiency { get; set; }

        public string ApplicationUserId { get; set; }

        public ApplicationUser ApplicationUser { get; set; }

        public int SkillId { get; set; }

        public Skill Skill { get; set; }
    }

}
