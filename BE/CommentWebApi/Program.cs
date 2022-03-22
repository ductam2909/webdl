using AccountOwnerServer.Extensions;
using Microsoft.AspNetCore.HttpOverrides;


var builder = WebApplication.CreateBuilder(args);


// get configuration
var configuration = builder.Configuration;
var environment = builder.Environment;

ServiceExtensions.setConfigurationManager(configuration);

// Add services to the container.
builder.Services.ConfigureCors(); // cors
builder.Services.ConfigureIISIntegration(); // iis
builder.Services.ConfigureApplicationContext(); // context
builder.Services.ConfigureDI(); // di
builder.Services.ConfigureAutoMap(); // auto map DTO
builder.Services.AddControllers().AddNewtonsoftJson(o => o.SerializerSettings.ReferenceLoopHandling =
        Newtonsoft.Json.ReferenceLoopHandling.Ignore); ;

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
    app.UseDeveloperExceptionPage();
else
    app.UseHsts();

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.All
}); // help with Linux deploy

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
