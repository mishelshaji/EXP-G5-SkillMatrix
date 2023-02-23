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
        public SkillTypes SkillType { get; set; }

        public Proficiencies Proficiency { get; set; }

        public string ApplicationUserId { get; set; }

        public int SkillId { get; set; }

    }

    public class UserSkillUpdateDtoApi
    {
        public int SkillType { get; set; }

        public int Proficiency { get; set; }

        public string ApplicationUserId { get; set; }

        public int SkillId { get; set; }
    }
}
