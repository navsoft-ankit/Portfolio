using PORFOLIO.Data;
using PORFOLIO.Services;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// MongoDB
builder.Services.AddSingleton<IMongoClient>(sp =>
{
    var config = sp.GetRequiredService<IConfiguration>();
    return new MongoClient(config["ConnectionStrings:MongoDb"]);
});

builder.Services.AddSingleton<MongoDbContext>();
builder.Services.AddSingleton<CloudinaryService>();

builder.Services.AddControllers();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy =>
        {
            policy.WithOrigins(
                "http://localhost:5173",
                "https://ankitdas.vercel.app"
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
            .SetIsOriginAllowed(origin => true);
        });
});

var app = builder.Build();

// ❗ IMPORTANT ORDER FIX
app.UseRouting();

app.UseCors("AllowReact");

app.UseAuthorization(); // safe add

app.MapControllers();

app.MapGet("/", () => "Portfolio API Running 🚀");

app.Run();