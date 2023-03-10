using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SkillMatrix.Domain.Types;

namespace SkillMatrix.Domain.Models
{
    public class Certificate
    {
        public int Id { get; set; }

        [Required, NotNull]
        [StringLength(100)]
        public string Name { get; set; }

        public Status Status { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

    }
}
