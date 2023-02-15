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

        [Required, NotNull]
        [StringLength(50)]
        public string Type { get; set; }

        [Required, NotNull]
        public int Proficiency { get; set; }

        [StringLength(50)]
        public string CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        [StringLength(50)]
        public string ModifiedBy { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int SkillId { get; set; }

        public Skill Skill { get; set; }
    }
}
