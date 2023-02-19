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
                    Proficiency= p.Proficiency,
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

        public async Task<ServiceResponse<UserSkillViewDto>> CreateAsync(UserSkillCreateDto dto)
        {
            var result = new ServiceResponse<UserSkillViewDto>();

            var userSkill = new UserSkill()
            {
                SkillType= dto.SkillType,
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
            };
            return result;
        }

        public async Task<ServiceResponse<UserSkillViewDto>?> UpdateAsync(int id, UserSkillCreateDto dto)
        {
            var result = new ServiceResponse<UserSkillViewDto>();

            // If the product does not exist, return back to controller.
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
                Skill = new()
                {
                    Id = userSkill.Skill.Id,
                    Name = userSkill.Skill.Name,
                    Category= new()
                    {
                        Id = userSkill.Skill.Category.Id,
                        Name = userSkill.Skill.Category.Name
                    }
                }

            };
            return result;
        }

        public async Task<ServiceResponse<bool>> DeleteAsync(int id)
        {
            // If the product does not exist, return back to controller.
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
