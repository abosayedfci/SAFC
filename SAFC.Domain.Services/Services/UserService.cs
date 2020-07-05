using Microsoft.AspNetCore.Identity;
using SAFC.Domain.Core;
using SAFC.Domain.Data;
using System;
using System.Threading.Tasks;

namespace SAFC.Domain.Services
{
    public class UserService : IUserService
    {
        private readonly IGenericRepository<User> _genericRepository;
        private readonly UserManager<User> _userManager;
        public UserService(IGenericRepository<User> genericRepository, UserManager<User> userManager)
        {
            _genericRepository = genericRepository;
            _userManager = userManager;
        }

        public async Task<IdentityResult> RegisterUser(User userIdentity, string password)
        {
            var result = await _userManager.CreateAsync(userIdentity, password);
            if (!result.Succeeded) return result;
            _genericRepository.Insert(userIdentity);
            return result;
        }
        public async Task<User> FindByName(string userName)
        {
            var result = await _userManager.FindByNameAsync(userName);
            return result;
        }
        public async Task<bool> CheckPassword(User user, string password)
        {
            var result = await _userManager.CheckPasswordAsync(user, password);
            return result;
        }
    }
}
