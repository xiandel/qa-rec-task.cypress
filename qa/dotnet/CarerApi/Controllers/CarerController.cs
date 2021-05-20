using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CarerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarerController : ControllerBase
    {
        private static readonly string[] WorkingDays = new[]
        {
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        };

        [Route("{date}")]
        [HttpGet]
        public IActionResult Get(DateTime date)
        {
            var workingday = WorkingDays.Contains(date.ToString("dddd"));
            if (workingday) {
                return Ok(new CarerPlanner
            {
                date = date,
                workingDay = workingday
            });
            } else {
                return NoContent();
            }
        }
    }
}
