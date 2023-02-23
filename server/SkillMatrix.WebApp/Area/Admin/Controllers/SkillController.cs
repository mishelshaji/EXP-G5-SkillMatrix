using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkillMatrix.Service.Dto;
using SkillMatrix.Service.Service;

namespace SkillMatrix.WebApp.Area.Admin.Controllers
{
    public class SkillController : AdminControllerBase
    {
        private readonly SkillService _service;

        public SkillController(SkillService service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(typeof(SkillViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var result = await _service.GetAllasync();
            return Ok(result.Result);
        }

        [HttpGet("SkillRequestPending")]
        [ProducesResponseType(typeof(SkillViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllPending()
        {
            var result = await _service.GetAllPendingasync();
            return Ok(result.Result);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(SkillViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetOne(int id)
        {
            var result = await _service.GetByIdAsync(id);
            if (result == null)
                return NotFound();

            return Ok(result.Result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(SkillViewDto), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Create([FromBody]SkillCreateDto dto)
        {
            var result = await _service.CreateAsync(dto);
            if (!result.IsValid)
                return BadRequest(result.Errors);

            return CreatedAtAction(nameof(GetOne), new { id = result.Result.Id }, result.Result);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(typeof(SkillViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Create(int id, SkillCreateDto dto)
        {
            var result = await _service.UpdateAsync(id, dto);

            if (result == null)
                return NotFound();

            if (!result.IsValid)
                return BadRequest(result.Errors);

            return Ok(result.Result);
        }

        [HttpPut("{id}/UpdatePending")]
        [ProducesResponseType(typeof(SkillViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> UpdatePending(int id)
        {
            var result = await _service.UpdatePendingAsync(id);

            if (result == null)
                return NotFound();

            if (!result.IsValid)
                return BadRequest(result.Errors);

            return Ok(result.Result);
        }


        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _service.DeleteAsync(id);
            if (result == null)
                return NotFound();

            return Ok();
        }
    }
}

