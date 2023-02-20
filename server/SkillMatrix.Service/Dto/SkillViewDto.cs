using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using SkillMatrix.Domain.Types;

namespace SkillMatrix.Service.Dto
{
    public class SkillViewDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Status Status { get; set; }

        public CategoryViewDto Category { get; set; }
    }

    public static class ApplicationUserViewDtoMapper
    {
        public static Skill Map(SkillViewDto source)
        {
            return new Skill
            {
                Id = source.Id,
                Name = source.Name,
                Status = source.Status,
                CategoryId = source.Category.Id,
                Category = new Category
                {
                    Id = source.Category.Id,
                    Name = source.Category.Name,
                }

            };

        }

        public static SkillViewDto Map(Skill source) 
            {
                return new SkillViewDto
                {
                    Id = source.Id,
                    Name = source.Name,
                    Status = source.Status,
                    Category = new CategoryViewDto(source.Category)
                };
            }
    }
}
