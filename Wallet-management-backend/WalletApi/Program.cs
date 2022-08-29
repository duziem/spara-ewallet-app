global using WalletApi.Data;
global using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Serialization;
using WalletApi.Authorization;
using WalletApi.Helpers;
using WalletApi.Services;




var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("defaultConn"));
});

// ------------------Adding new lines of code
/*builder.Services.AddCors();*/
builder.Services.AddControllers().AddJsonOptions(x =>
{
    // serialize enums as strings in api responses (e.g. Role)
    x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});

// to resolve the cyclic issue encountered when returning models
// that have navigation properties
JsonSerializerOptions options = new()
{
    ReferenceHandler = ReferenceHandler.IgnoreCycles,
    WriteIndented = true
};

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
// ---------------------Adding new lines of code


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

// --------------Adding new lines of code

// configure strongly typed settings object
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

// configure DI for application services
builder.Services.AddScoped<IJwtUtils, JwtUtils>();
builder.Services.AddScoped<IAccountService, AccountService>();
/*builder.Services.AddScoped<IEmailService, EmailService>();*/
builder.Services.AddSingleton<IEmailService, EmailService>();

// dependency injection for the HttpClient
builder.Services.AddHttpClient();

builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
{
    build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

// --------Adding new lines of code

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
    //app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

//app.UseAuthorization();

// --------------Adding new lines of code

// global cors policy
/*app.UseCors(x => x
    .SetIsOriginAllowed(origin => true)
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials());*/
/*app.UseCors(x => x
    .WithOrigins("*")
    .AllowAnyMethod()
    .AllowAnyHeader());*/

app.UseCors("corspolicy");

// Note: this line of code was moved 
// custom jwt auth middleware
app.UseMiddleware<JwtMiddleware>();

// Note: this line of code was moved - it was originally below
// the auth middleware app.UseMiddleware<JwtMiddleware>()
app.MapControllers();

// global error handler
app.UseMiddleware<ErrorHandlerMiddleware>();

// custom jwt auth middleware
/*app.UseMiddleware<JwtMiddleware>();*/

// --------------Adding new lines of code

/*app.MapControllers();*/

//app.Run();

// --------------Adding new lines of code

app.Run("http://localhost:4000");

// --------------Adding new lines of code
