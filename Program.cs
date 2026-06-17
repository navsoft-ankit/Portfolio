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

// Cloudinary
builder.Services.AddSingleton<CloudinaryService>();

// Controllers
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
            .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();

app.UseCors("AllowReact");

app.MapControllers();

app.MapGet("/", () => "Portfolio API Running 🚀");

app.Run();