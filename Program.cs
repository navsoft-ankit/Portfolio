using Microsoft.EntityFrameworkCore;
using PORFOLIO.Data;

var builder = WebApplication.CreateBuilder(args);

Console.WriteLine("ENV = " + builder.Environment.EnvironmentName);

Console.WriteLine(
    "CONN = " +
    builder.Configuration.GetConnectionString("DefaultConnection")
);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy =>
        {
            policy.WithOrigins(
                "http://localhost:5173",
                "http://192.168.3.38:5173"

            )
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowReact");

app.MapControllers();

app.Run();