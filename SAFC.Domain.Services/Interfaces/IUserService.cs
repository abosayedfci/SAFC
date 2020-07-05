using Microsoft.AspNetCore.Identity;
using SAFC.Domain.Core;
using System.Threading.Tasks;

namespace SAFC.Domain.Services
{
    public interface IUserService
    {
        Task<IdentityResult> RegisterUser(User userIdentity, string password);
        Task<User> FindByName(string userName);
        Task<bool> CheckPassword(User user, string password);
       
    }
}