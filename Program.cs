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

//MongoDbContext 
builder.Services.AddSingleton<MongoDbContext>();

//Services
builder.Services.AddSingleton<CloudinaryService>();

//Controllers
builder.Services.AddControllers();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy =>
        {
            policy
               .WithOrigins(
                    "http://localhost:5173",
                    "https://ankitdas.vercel.app",
                    "https://portfolio-p7iw0vjfn-ankitdas-6862s-projects.vercel.app"
)
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowReact");

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.MapGet("/", () => "Portfolio API Running ");

app.Run();