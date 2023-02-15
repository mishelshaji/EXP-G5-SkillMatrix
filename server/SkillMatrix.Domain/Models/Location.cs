﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Domain.Models
{
    public class Location
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int CreatedById { get; set; }

        public ApplicationUser User { get; set; }

        public int ModifiedById { get; set; }

        public ApplicationUser User1 { get; set; }
    }
}
