using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Service.Dto
{
    public class CategoryViewDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public CategoryViewDto()
        {

        }

        public CategoryViewDto(Category category)
        {
            Id = category.Id;
            Name = category.Name;
        }
    }
}
