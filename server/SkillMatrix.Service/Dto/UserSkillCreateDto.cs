using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SkillMatrix.Domain.Types;

namespace SkillMatrix.Service.Dto
{
    public class UserSkillCreateDto
    {
        
        public SkillType SkillType { get; set; }

        public Proficiency Proficiency { get; set; }

        public string ApplicationUserId { get; set; }

        public int SkillId { get; set; }

    }
}
