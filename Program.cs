using PORFOLIO.Data;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// MongoDB Client + Context DI FIX
builder.Services.AddSingleton<IMongoClient>(sp =>
{
    var config = sp.GetRequiredService<IConfiguration>();
    return new MongoClient(config["ConnectionStrings:MongoDb"]);
});

builder.Services.AddSingleton<MongoDbContext>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy =>
        {
            policy.WithOrigins(
    "http://localhost:5173",
    "https://ankitdas.vercel.app",
    "https://portfolio-6k0f.onrender.com"
)
            
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Swagger only for dev
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// // ❌ optional: Render e problem করলে এটা remove করতে পারো
// app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseCors("AllowReact");

app.MapControllers();
app.MapGet("/", () => "Portfolio API Running 🚀");
app.MapGet("/test", () => "WORKING");

app.Run();