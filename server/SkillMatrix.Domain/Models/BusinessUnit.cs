using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Domain.Models
{
    public class BusinessUnit
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        [ForeignKey(nameof(CreatedBy))]
        public int CreatedById { get; set; }
        public ApplicationUser CreatedBy { get; set; }

        //[ForeignKey(nameof(ModifiedBy))]
        //public int ModifiedById { get; set; }
        //public ApplicationUser ModifiedBy { get; set; }
    }
}
