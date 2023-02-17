﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Domain.Models
{
    public class Skill
    {
        public int Id { get; set; }

        [Required, NotNull]
        [StringLength(100)]
        public string Name { get; set; }

        public enum Status { Approved = 1, Pending = 2 }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }
    }
}
