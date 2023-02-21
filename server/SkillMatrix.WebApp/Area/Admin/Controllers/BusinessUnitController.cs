using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillMatrix.Service.Dto;
using SkillMatrix.Service.Service;

namespace SkillMatrix.WebApp.Area.Admin.Controllers
{
    public class BusinessUnitController : AdminControllerBase
    {
        private readonly BusinessUnitService _service;

        public BusinessUnitController(BusinessUnitService service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(typeof(BusinessUnitViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var result = await _service.GetAllAsync();
            return Ok(result);
        }

        [HttpGet("{name}")]
        [ProducesResponseType(typeof(BusinessUnitViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetOne(string name)
        {
            var result = await _service.GetByNameAsync(name);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(BusinessUnitViewDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> Post(BusinessUnitCreateDto dto)
        {
            var result = await _service.CreateAsync(dto);
            return Ok(result);
        }
    }
}
