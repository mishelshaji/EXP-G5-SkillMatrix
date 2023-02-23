using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SkillMatrix.Domain.Types;
using SkillMatrix.Service.Data;
using SkillMatrix.Service.Dto;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SkillMatrix.Service.Service
{
    public class AccountsService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext db;

        public AccountsService(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager,
            SignInManager<ApplicationUser> signInManager, IConfiguration configuration, ApplicationDbContext db)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _configuration = configuration;
            this.db = db;
        }

        public async Task<ServiceResponse<bool>> CreateUserAsync(UserCreateDto dto)
        {
            var response = new ServiceResponse<bool>();

            var user = new ApplicationUser
            {
                Name = dto.Name,
                Email = dto.Email,
                DateOfBirth = dto.DateOfBirth,
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                DesignationId = dto.DesignationId,
                TeamId = dto.TeamId,
                BusinessUnitId = dto.BusinessUnitId,
                LocationId = dto.LocationId,
                PhoneNumber = dto.PhoneNumber,
                UserName = Guid.NewGuid().ToString()
            };

            var userstatus = await _userManager.CreateAsync(user, dto.Password);
            if (!userstatus.Succeeded)
            {
                response.AddError("", "Failed to register user");
                return response;
            }

            await _userManager.AddToRoleAsync(user, "User");

            response.Result = true;
            return response;

        }
        public async Task<ServiceResponse<string>> LoginAsync(LoginDto dto)
        {
            var response = new ServiceResponse<string>();

            var user = await _userManager.FindByEmailAsync(dto.Email);
            if (user == null)
            {
                response.AddError(nameof(dto.Email), "An account with this email does not exist.");
                return response;
            }

            var signin = await _signInManager.CheckPasswordSignInAsync(user, dto.Password, true);
            if (signin.Succeeded)
            {
                response.Result = GenerateToken(user);
                return response;
            }

            // If the signin failed, generate error messages.
            if (signin.IsLockedOut)
                response.AddError("", "Account locked.");
            else if (signin.IsNotAllowed)
                response.AddError("", "You are not allowed to signin.");
            else
                response.AddError("", "Invalid email/password.");

            return response;
        }

        public async Task<ProfileViewDto> GetProfileAsync(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return null;
            }

            //return new ProfileViewDto
            //{
            //    Name = user.Name,
            //    Email = user.Email,
            //    DateOfBirth= user.DateOfBirth,
            //    PhoneNumber= user.PhoneNumber
            //};

            var user1 = await db.ApplicationUsers
                .Include(m=>m.BusinessUnit)
                .Include(m=>m.Designation)
                .Include(m=>m.Team)
                .Include(m=>m.Location)
                .FirstOrDefaultAsync(m=>m.Id == id);

            return new()
            {
                Name = user1.Name,
                Email = user1.Email,
                DateOfBirth = user1.DateOfBirth,
                PhoneNumber = user1.PhoneNumber,
                BusinessUnit = new BusinessUnitViewDto
                {
                    Id = user1.BusinessUnit.Id,
                    Name = user.BusinessUnit.Name
                },
                Designation = new DesignationViewDto
                {
                    Id = user1.Designation.Id,
                    Name = user1.Designation.Name,
                },
                Team = new TeamViewDto
                {
                    Id = user1.Team.Id,
                    Name = user1.Team.Name,
                },
                Location = new LocationViewDto
                {
                    Id = user1.Location.Id,
                    Name = user1.Location.Name,
                }
            };
        }

        public async Task<ProfileViewDto> GetProfileByIdAsync(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return null;
            }

            var user1 = await db.ApplicationUsers
                .Include(m => m.BusinessUnit)
                .Include(m => m.Designation)
                .Include(m => m.Team)
                .Include(m => m.Location)
                .FirstOrDefaultAsync(m => m.Id == id);

            return new()
            {
                Id = user1.Id,
                Name = user1.Name,
                Email = user1.Email,
                DateOfBirth = user1.DateOfBirth,
                PhoneNumber = user1.PhoneNumber,
                BusinessUnit = new BusinessUnitViewDto
                {
                    Id = user1.BusinessUnit.Id,
                    Name = user.BusinessUnit.Name
                },
                Designation = new DesignationViewDto
                {
                    Id = user1.Designation.Id,
                    Name = user1.Designation.Name,
                },
                Team = new TeamViewDto
                {
                    Id = user1.Team.Id,
                    Name = user1.Team.Name,
                },
                Location = new LocationViewDto
                {
                    Id = user1.Location.Id,
                    Name = user1.Location.Name,
                }
            };
        }

        public async Task<ProfileViewDto[]> GetAllProfileAsync()
        {
            var res = await _userManager.GetUsersInRoleAsync("User");
            return res.Select(m => new ProfileViewDto
            {
                Name = m.Name,
                Email = m.Email,
                DateOfBirth = m.DateOfBirth,
                PhoneNumber = m.PhoneNumber
            }).ToArray();
        }

        public async Task<ServiceResponse<ProfileViewDto>?> UpdateAsync(string id, UserCreateDto dto)
        {
            var result = new ServiceResponse<ProfileViewDto>();

            var user = await db.ApplicationUsers.FindAsync(id);

            if (user == null)
            {
                return null;
            }

            user.Name = dto.Name;
            user.Email = dto.Email;
            user.DateOfBirth = dto.DateOfBirth;
            user.PhoneNumber = dto.PhoneNumber;
            user.BusinessUnitId = dto.BusinessUnitId;
            user.DesignationId = dto.DesignationId;
            user.TeamId = dto.TeamId;
            user.LocationId = dto.LocationId;

            await db.SaveChangesAsync();

            result.Result = new ProfileViewDto
            {
                Name = user.Name,
                Email = user.Email,
                DateOfBirth = user.DateOfBirth,
                PhoneNumber = user.PhoneNumber,
                BusinessUnitId = 0,
                DesignationId = 0,
                TeamId = 0,
                LocationId = 0
            };
            return result;
        }
        private string GenerateToken(ApplicationUser user)
        {
            var role = _userManager.GetRolesAsync(user)
                .GetAwaiter()
                .GetResult()
                .First();

            var claims = new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, $"{user.Name}"),
                new Claim(ClaimTypes.Role, role)
            };

            string issuer = _configuration["Jwt:Issuer"];
            string audience = _configuration["Jwt:Audience"];
            string key = _configuration["Jwt:Key"];

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(signingKey, "HS256");

            var token = new JwtSecurityToken(
                issuer,
                audience,
                claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
