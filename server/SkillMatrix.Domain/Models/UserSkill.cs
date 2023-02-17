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

        public enum Type { Primary = 1, Secondary = 2, Additional = 3 }

        public enum Proficiency { Beginner = 1, Intermediate = 2, Expert = 3 }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int SkillId { get; set; }

        public Skill Skill { get; set; }
    }
}
