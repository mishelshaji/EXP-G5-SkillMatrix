using Microsoft.EntityFrameworkCore;
using SkillMatrix.Domain.Models;
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
    public class UserSkillService
    {
        private readonly ApplicationDbContext _db;

        public UserSkillService(ApplicationDbContext db)
        {
            _db = db;

        }

        public async Task<ServiceResponse<UserSkillViewDto[]>> GetAllAsync()
        {
            var userSkill = await _db.UserSkills
                .Include(m => m.ApplicationUser)
                .Include(s => s.Skill)
                .Select(p => new UserSkillViewDto
                {
                    Id = p.Id,
                    SkillType = p.SkillType,
                    Proficiency = p.Proficiency,
                    ApplicationUser = new()
                    {
                        Id = p.ApplicationUser.Id,
                        Name = p.ApplicationUser.Name,
                    },
                    Skill = new()
                    {
                        Id = p.Skill.Id,
                        Name = p.Skill.Name,
                        Category = new()
                        {
                            Id = p.Skill.Category.Id,
                            Name = p.Skill.Category.Name,
                        }
                    }
                }).ToArrayAsync();

            return new()
            {
                Result = userSkill
            };
        }
        public async Task<ServiceResponse<UserSkillViewDto>?> GetByIdAsync(int id)
        {
            var userSkill = await _db.UserSkills
                .Include(m => m.ApplicationUser)
                .Include(s => s.Skill)
                .ThenInclude(m => m.Category)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (userSkill is null)
                return null;

            ServiceResponse<UserSkillViewDto> serviceResponse = new()
            {
                Result = new()
                {
                    Id = userSkill.Id,
                    SkillType = userSkill.SkillType,
                    Proficiency = userSkill.Proficiency,
                    ApplicationUser = new()
                    {
                        Id = userSkill.ApplicationUser.Id,
                        Name = userSkill.ApplicationUser.Name
                    },
                    Skill = new()
                    {
                        Id = userSkill.Skill.Id,
                        Name = userSkill.Skill.Name,
                        Category = new()
                        {
                            Id = userSkill.Skill.Category.Id,
                            Name = userSkill.Skill.Category.Name
                        }
                    }
                }
            };
            return serviceResponse;
        }

        public async Task<ServiceResponse<UserSkillViewDto[]>?> GetByUserIdAsync(string Id)
        {
            var userSkill = await _db.UserSkills
                .Where(m => m.ApplicationUserId == Id)
                .Include(p => p.ApplicationUser)
                .Include(s => s.Skill)
                .ThenInclude(c => c.Category)
                .Where(s => s.Skill.Status == Status.Approved)
                .Select(UserSkill => new UserSkillViewDto
                {
                    Id = UserSkill.Id,
                    SkillType = UserSkill.SkillType,
                    Proficiency = UserSkill.Proficiency,
                    ApplicationUser = new()
                    {
                        Id = UserSkill.ApplicationUser.Id,
                        Name = UserSkill.ApplicationUser.Name,
                    },
                    Skill = new()
                    {
                        Id = UserSkill.Skill.Id,
                        Name = UserSkill.Skill.Name,
                        Category = new()
                        {
                            Id = UserSkill.Skill.Category.Id,
                            Name = UserSkill.Skill.Category.Name,
                        }
                    }
                }).ToArrayAsync();

            return new()
            {
                Result = userSkill
            };

        }

        public async Task<ServiceResponse<UserSkillViewDto>> CreateAsync(UserSkillCreateDto dto)
        {
            var result = new ServiceResponse<UserSkillViewDto>();
            switch (dto.SkillType)
            {
                case SkillTypes.Primary:
                    if (await _db.UserSkills.AnyAsync(m => m.SkillType == SkillTypes.Primary && m.ApplicationUserId == dto.ApplicationUserId))
                    {
                        result.AddError(nameof(SkillTypes), "A user can include only one primary skill");
                        return result;
                    }
                    break;
                case SkillTypes.Secondary:
                    if (await _db.UserSkills.AnyAsync(m => m.SkillType == SkillTypes.Secondary && m.ApplicationUserId == dto.ApplicationUserId))
                    {
                        result.AddError(nameof(SkillTypes), "A user can include only one Secondary skill");
                        return result;
                    }
                    break;
                case SkillTypes.Additional:
                    break;
                default:
                    break;
            }
            var userSkill = new UserSkill()
            {
               // SkillType = SkillType.TryParse(dto.SkillType),
                Proficiency = dto.Proficiency,
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                ApplicationUserId = dto.ApplicationUserId,
                SkillId = dto.SkillId
            };
            _db.UserSkills.Add(userSkill);
            await _db.SaveChangesAsync();

            result.Result = new()
            {
                Id = userSkill.Id,
                SkillType = userSkill.SkillType,
                Proficiency = userSkill.Proficiency,
                SkillId = userSkill.SkillId
            };
            return result;
        }

        public async Task<ServiceResponse<SkillViewDto>> CreateNewAsync(SkillCreateDto dto)
        {
            var result = new ServiceResponse<SkillViewDto>();

            // Basic validations
            if (!await _db.Categories.AnyAsync(m => m.Id == dto.CategoryId))
                result.AddError(nameof(dto.CategoryId), "Invalid category");

            if (await _db.Skills.AnyAsync(m => m.Name == dto.Name))
                result.AddError(nameof(dto.Name), "A similar skill already exists.");

            if (!result.IsValid)
                return result;

            var skill = new Skill()
            {
                Name = dto.Name,
                Status = Status.pending,
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                CategoryId = dto.CategoryId,
            };
            _db.Skills.Add(skill);
            await _db.SaveChangesAsync();

            result.Result = new()
            {
                Id = skill.Id,
                Name = skill.Name,
                Status = skill.Status,
                Category = null
            };
            return result;
        }

        public async Task<ServiceResponse<UserSkillViewDto>?> UpdateAsync(int id, UserSkillCreateDto dto)
        {
            var result = new ServiceResponse<UserSkillViewDto>();

            // If the skill does not exist, return back to controller.
            var userSkill = await _db.UserSkills.FindAsync(id);
            if (userSkill == null)
                return null;

            userSkill.SkillId = dto.SkillId;
            userSkill.SkillType = dto.SkillType;
            userSkill.Proficiency = dto.Proficiency;
            userSkill.ModifiedDate = DateTime.UtcNow;

            await _db.SaveChangesAsync();

            result.Result = new UserSkillViewDto
            {
                SkillType = userSkill.SkillType,
                Proficiency = dto.Proficiency,
                SkillId = dto.SkillId,
                ApplicationUserId = dto.ApplicationUserId
            };
            return result;
        }

        public async Task<ServiceResponse<bool>> DeleteAsync(int id)
        {
            // If the skill does not exist, return back to controller.
            var userSkill = await _db.UserSkills.FindAsync(id);
            if (userSkill == null)
                return null;

            _db.UserSkills.Remove(userSkill);
            await _db.SaveChangesAsync();
            return new ServiceResponse<bool>
            {
                Result = true
            };
        }
    }



}
