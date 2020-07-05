using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SAFC.Domain.Core;
using SAFC.Domain.Data;
using SAFC.Domain.Services;
using SAFC.Presentation.Helpers;
using SAFC.Presentation.ViewModels;

namespace SAFC.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
  
        private readonly IUserService _UserService;
        private readonly IMapper _mapper;

        public AccountsController( IMapper mapper, IUserService userService)
        {
            _mapper = mapper;
            _UserService = userService;
        }

        // POST api/accounts
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userIdentity = _mapper.Map<User>(model);
            var result = await _UserService.RegisterUser(userIdentity, model.Password);
            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
            return new OkObjectResult(new { Message =  "Account created" });
        }
    }
}