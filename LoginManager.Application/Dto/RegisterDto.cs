﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginManager.Application.Dto
{
    public class RegisterDto
    {
       
            public string Username { get; set; }
            public string Password { get; set; }
            public string ConfirmPassword { get; set; }
            public string Email { get; set; }
        
    }
}
