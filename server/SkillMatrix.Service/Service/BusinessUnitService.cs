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
    public class BusinessUnitService
    {
        private readonly ApplicationDbContext _db;

        public BusinessUnitService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<List<BusinessUnitViewDto>> GetAllAsync()
        {
            return await _db.BusinessUnits
                .Select(c => new BusinessUnitViewDto
                {
                    Id = c.Id,
                    Name = c.Name,
                })
                .ToListAsync();
        }

        public async Task<BusinessUnitViewDto?> GetByNameAsync(string name)
        {
            BusinessUnit? businessunit = await _db.BusinessUnits.FirstOrDefaultAsync(m => m.Name == name);
            return businessunit == null ? null : new BusinessUnitViewDto
            {
                Id = businessunit.Id,
                Name = businessunit.Name,
            };
        }

        public async Task<BusinessUnitViewDto> CreateAsync(BusinessUnitCreateDto dto)
        {
            var businessunit = new BusinessUnit
            {
                Name = dto.Name,
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow

            };

            _db.BusinessUnits.Add(businessunit);
            await _db.SaveChangesAsync();

            return new BusinessUnitViewDto
            {
                Id = businessunit.Id,
                Name = businessunit.Name
            };
        }     
}
}
