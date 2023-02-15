using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Domain.Models
{
    public class Category
    {
        public int Id { get; set; }

        [StringLength(30)]
        [Required, NotNull]
        public string Name { get; set; }

        [StringLength(50)]
        public  string CreatedBy { get; set; }

        public DateTime CreatedDate { get; set;}

        [StringLength(50)]
        
        public string ModifiedBy { get; set; }

        public DateTime ModifiedDate { get; set;}
    }
}
