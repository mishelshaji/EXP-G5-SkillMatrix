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
    public class ReportService
    {
        private readonly ApplicationDbContext _db;

        public ReportService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<ServiceResponse<ReportViewDto[]>> GetAllAsync()
        {
            var report = await _db.UserSkills
                .Include(m => m.Skill)
                .GroupBy(x => x.SkillId)
                .Select(s => new ReportViewDto
                {
                    SkillId = s.Key,
                    SkillName = s.FirstOrDefault().Skill.Name,
                    Count = s.Select(x => x.ApplicationUserId).Distinct().Count()
                }).ToArrayAsync();

            return new()
            {
                Result = report
            };
        }

        public async Task<ServiceResponse<ReportViewDto[]>> GetAllProficiencyLevelAsync()
        {
            var report = await _db.UserSkills
                .Where(m=>m.Proficiency == Proficiencies.Expert)
                .GroupBy(x => x.SkillId)
                .Select(s => new ReportViewDto
                {
                    SkillId = s.Key,
                    Count = s.Select(x => x.ApplicationUserId).Distinct().Count()
                }).ToArrayAsync();

            return new()
            {
                Result = report
            };
        }
    }
}
