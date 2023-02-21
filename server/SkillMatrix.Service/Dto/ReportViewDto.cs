using SkillMatrix.Domain.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Service.Dto
{
    public class ReportViewDto
    {
        public int SkillId { get; set; }

        //public Proficiency Proficiency { get; set; }

        public Skill Skill { get; set; }

        public int Count { get; set; }

    }
}
