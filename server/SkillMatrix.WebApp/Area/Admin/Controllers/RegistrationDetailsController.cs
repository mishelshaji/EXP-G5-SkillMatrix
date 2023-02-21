using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillMatrix.Service.Dto;
using SkillMatrix.Service.Service;

namespace SkillMatrix.WebApp.Area.Admin.Controllers
{
    public class RegistrationDetailsController : AdminControllerBase
    {
        private readonly RegistrationDetailsService _service;

        public RegistrationDetailsController(RegistrationDetailsService service)
        {
            _service = service;
        }

        [HttpGet("Designation")]
        [ProducesResponseType(typeof(DesignationViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllDesignation()
        {
            var result = await _service.GetAllDesignationAsync();
            return Ok(result);
        }

        [HttpPost("Designation")]
        [ProducesResponseType(typeof(DesignationViewDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> PostDesignation(DesignationCreateDto dto)
        {
            var result = await _service.CreateDesignationAsync(dto);
            return Ok(result);
        }

        [HttpGet("Location")]
        [ProducesResponseType(typeof(LocationViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllLocation()
        {
            var result = await _service.GetAllLocationAsync();
            return Ok(result);
        }

        [HttpPost("Location")]
        [ProducesResponseType(typeof(LocationViewDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> PostAllLocation(LocationCreateDto dto)
        {
            var result = await _service.CreateLocationAsync(dto);
            return Ok(result);
        }

        [HttpGet("Team")]
        [ProducesResponseType(typeof(TeamViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var result = await _service.GetAllTeamAsync();
            return Ok(result);
        }

        [HttpPost("Team")]
        [ProducesResponseType(typeof(TeamViewDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> Post(TeamCreateDto dto)
        {
            var result = await _service.CreateTeamAsync(dto);
            return Ok(result);
        }

    }
}
