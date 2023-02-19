using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SkillMatrix.Domain.Types;

namespace SkillMatrix.Service.Dto
{
    public class SkillCreateDto
    {
        public string Name { get; set; }

        public int CategoryId { get; set; }
    }
}
