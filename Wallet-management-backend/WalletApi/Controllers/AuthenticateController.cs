using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using WalletApi.Models;

namespace WalletApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        /*
        private readonly DataContext _context;

        //private readonly DataContext context;

        public AuthenticateController(DataContext context)
        {
            _context = context;
            //this.context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<List<User>>> Register (RegisterDto request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);
            try
            {
                var newUser = new User
                {
                    Name = request.Name,
                    Email = request.Email,
                    Phone = request.Phone,
                    PasswordHash = passwordHash,
                    PasswordSalt = passwordSalt,
                };


                _context.Users.Add(newUser);
                await _context.SaveChangesAsync();
                
            }
            catch (Exception)
            {
                return BadRequest("could not register user");
            }

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDto request)
        {
            var user= await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null)
            {
                return BadRequest("User not found");
            }

            // verify password hash
            if(!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Wrong password");
            }

            string token = CreateToken(user);

            var res= new LoginResDto
            {
                token = token,
                user = user,
            };

            // if user is found return Ok
            return Ok(res);

        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac= new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash= hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private string CreateToken(User user)
        {
            return String.Empty;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {

            using(var hmac= new HMACSHA512(passwordSalt))
            {
                var computedHash= hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash==passwordHash;
            }
        }

        private class LoginResDto
        {
            public string token { get; set; }
            public User user { get; set; }
        }

        */
    }
}
