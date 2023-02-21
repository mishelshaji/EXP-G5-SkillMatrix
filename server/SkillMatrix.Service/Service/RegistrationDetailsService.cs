using SkillMatrix.Service.Data;
using SkillMatrix.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Service.Service
{
    public class RegistrationDetailsService
    {
        private readonly ApplicationDbContext _db;

        public RegistrationDetailsService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<List<DesignationViewDto>> GetAllDesignationAsync()
        {
            return await _db.Designations
                .Select(c => new DesignationViewDto
                {
                    Id = c.Id,
                    Name = c.Name,
                })
                .ToListAsync();
        }

        public async Task<DesignationViewDto> CreateDesignationAsync(DesignationCreateDto dto)
        {
            var designation = new Designation
            {
                Name = dto.Name,
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow

            };

            _db.Designations.Add(designation);
            await _db.SaveChangesAsync();

            return new DesignationViewDto
            {
                Id = designation.Id,
                Name = designation.Name
            };
        }

        public async Task<List<LocationViewDto>> GetAllLocationAsync()
        {
            return await _db.Locations
                .Select(c => new LocationViewDto
                {
                    Id = c.Id,
                    Name = c.Name,
                })
                .ToListAsync();
        }

        public async Task<LocationViewDto> CreateLocationAsync(LocationCreateDto dto)
        {
            var location = new Location
            {
                Name = dto.Name,
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow

            };

            _db.Locations.Add(location);
            await _db.SaveChangesAsync();

            return new LocationViewDto
            {
                Id = location.Id,
                Name = location.Name
            };
        }

        public async Task<List<TeamViewDto>> GetAllTeamAsync()
        {
            return await _db.Teams
                .Select(c => new TeamViewDto
                {
                    Id = c.Id,
                    Name = c.Name,
                })
                .ToListAsync();
        }

        public async Task<TeamViewDto> CreateTeamAsync(TeamCreateDto dto)
        {
            var team = new Team
            {
                Name = dto.Name,
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow

            };

            _db.Teams.Add(team);
            await _db.SaveChangesAsync();

            return new TeamViewDto
            {
                Id = team.Id,
                Name = team.Name
            };
        }


    }
}
