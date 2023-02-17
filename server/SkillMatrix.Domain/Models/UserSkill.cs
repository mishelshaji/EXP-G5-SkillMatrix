using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Domain.Models
{
    public class UserSkill
    {
        public int Id { get; set; }

        public StatusType.Type Type { get; set; }

        public StatusType.Proficiency Proficiency { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int SkillId { get; set; }

        public Skill Skill { get; set; }
    }
}
