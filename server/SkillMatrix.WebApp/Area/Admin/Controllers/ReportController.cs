using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillMatrix.Service.Dto;
using SkillMatrix.Service.Service;

namespace SkillMatrix.WebApp.Area.Admin.Controllers
{
    public class ReportController : AdminControllerBase
    {
        private readonly ReportService _service;

        public ReportController(ReportService service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(typeof(ReportViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var result = await _service.GetAllAsync();
            return Ok(result.Result);
        }

        [HttpGet("Proficiency")]
        [ProducesResponseType(typeof(ReportViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllProficiencyLevel()
        {
            var result = await _service.GetAllProficiencyLevelAsync();
            return Ok(result.Result);
        }
    }
}
