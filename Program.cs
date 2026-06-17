using PORFOLIO.Data;

var builder = WebApplication.CreateBuilder(args);

// MongoDB
builder.Services.AddSingleton<MongoDbContext>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy =>
        {
            policy.WithOrigins(
                "http://localhost:5173",
                "http://192.168.3.38:5173",
                "https://ankitdas.vercel.app"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseCors("AllowReact");

app.MapControllers();

app.Run();