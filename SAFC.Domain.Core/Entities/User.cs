
using Microsoft.AspNetCore.Identity;
using System;

namespace SAFC.Domain.Core
{

    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
    public class Role : IdentityRole<int> {
    
    }
}
