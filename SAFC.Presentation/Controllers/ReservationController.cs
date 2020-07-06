using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SAFC.Domain.Core;
using SAFC.Domain.Services;
using SAFC.Presentation.Helpers;
using System.Text.Json;

namespace SAFC.Presentation.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService _ReservationService;
        private readonly IMapper _mapper;

        public ReservationController(IMapper mapper , IReservationService reservationService)
        {
            _mapper = mapper;
            _ReservationService = reservationService; 
        }
        [HttpPost]
        public IActionResult Create([FromBody]ViewModels.ReservationRequestViewModel requestModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                ReservationRequest request = _mapper.Map<ReservationRequest>(requestModel);
               _ReservationService.CreateNewReservationRequest(request);
                return Ok(new { Message = "ReserVation Request Submitted Successfully" });
            }
            catch (Exception ex)
            {
               return BadRequest(Errors.AddErrorToModelState("Reservation_failure", ex.Message, ModelState));
            }
           

        }

    }
}
