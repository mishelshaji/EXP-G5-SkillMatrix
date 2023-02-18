using SkillMatrix.Domain.Types;
using SkillMatrix.Service.Data;
using SkillMatrix.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Service.Service
{
    public class SkillService
    {
        private readonly ApplicationDbContext _context;

        public SkillService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ServiceResponse<SkillViewDto[]>> GetAllasync()
        {
            var skills = await _context.Skills
                .Include(m => m.Category)
                .Select (s => new SkillViewDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    Status= s.Status,
                    Category = new()
                    {
                        Id = s.Category.Id,
                        Name = s.Category.Name
                    }

                }).ToArrayAsync();

            return new()
            {
                Result = skills
            };
        }
        public async Task<ServiceResponse<SkillViewDto>?> GetByIdAsync(int id)
        {
            var skill = await _context.Skills
                .Include(m => m.Category).FirstOrDefaultAsync(m => m.Id == id);

            if (skill is null)
                return null;

            ServiceResponse<SkillViewDto> serviceResponse = new()
            {
                Result = new()
                {
                    Id = skill.Id,
                    Name = skill.Name,
                    Status = skill.Status,
                    Category = new()
                    {
                        Id = skill.Category.Id,
                        Name = skill.Category.Name
                    }
                }
            };
            return serviceResponse;
        }
        public async Task<ServiceResponse<SkillViewDto>> CreateAsync(SkillCreateDto dto)
        {
            var result = new ServiceResponse<SkillViewDto>();

            // Basic validations
            if (!await _context.Categories.AnyAsync(m => m.Id == dto.CategoryId))
                result.AddError(nameof(dto.CategoryId), "Invalid category");

            if (await _context.Skills.AnyAsync(m => m.Name == dto.Name))
                result.AddError(nameof(dto.Name), "A similar skill already exists.");

            if (!result.IsValid)
                return result;

            var skill = new Skill()
            {
                Name = dto.Name,
                Status = 
                CategoryId = dto.CategoryId,
            };
            _context.Skills.Add(skill);
            await _context.SaveChangesAsync();

            result.Result = new()
            {
                Id = skill.Id,
                Name = skill.Name,
                Category = new()
                {
                    Id = skill.Category.Id,
                    Name = skill.Category.Name
                }
            };
            return result;
        }

        public async Task<ServiceResponse<SkillViewDto>?> UpdateAsync(int id, SkillCreateDto dto)
        {
            var result = new ServiceResponse<SkillViewDto>();

            // If the product does not exist, return back to controller.
            var skill = await _context.Skills.FindAsync(id);
            if (skill == null)
                return null;

            // Check if the category exists.
            if (!await _context.Categories.AnyAsync(m => m.Id == dto.CategoryId))
                result.AddError(nameof(dto.CategoryId), "Invalid category");

            if (await _context.Skills.AnyAsync(m => m.Name == dto.Name && m.Id != id))
                result.AddError(nameof(dto.Name), "A similar skill already exists.");

            if (!result.IsValid)
                return result;

            skill.Name = dto.Name;
            skill.CategoryId = dto.CategoryId;

            await _context.SaveChangesAsync();

            result.Result = new SkillViewDto
            {
                Name = skill.Name,
                Category = new() 
                {
                    Id = skill.Category.Id,
                    Name = skill.Category.Name 
                }
            };
            return result;
        }

        public async Task<ServiceResponse<bool>> DeleteAsync(int id)
        {
            // If the product does not exist, return back to controller.
            var product = await _context.Skills.FindAsync(id);
            if (product == null)
                return null;

            _context.Skills.Remove(product);
            await _context.SaveChangesAsync();
            return new ServiceResponse<bool>
            {
                Result = true
            };
        }
    }
}
