using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Domain.Models
{
    public class StatusType
    {
        public enum Status 
        {
           Approved,
           pending
        }

        public enum Type
        {
            Primary,
            Secondary,
            Additional
        }

        public enum Proficiency
        {
            Beginner,
            Intermediate,
            Additional
        }
    }
}
