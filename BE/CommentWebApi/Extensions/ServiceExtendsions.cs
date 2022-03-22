namespace AccountOwnerServer.Extensions;


using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using NLog;

using CongfigEfcore.Context;
using Repository.Contracts;
using Repository;


public static class ServiceExtensions
{

    private static ConfigurationManager? configuration;

    public static void setConfigurationManager(ConfigurationManager _configuration)
    {
        // nlog
        LogManager.LoadConfiguration(string.Concat(Directory.GetCurrentDirectory(), "/nlog.config"));
        configuration = _configuration;
    }

    

    // map
    public static void ConfigureAutoMap(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(Program));
    }

    // di
    public static void ConfigureDI(this IServiceCollection services)
    {
      
        services.AddScoped<IRepositoryWrapper, RepositoryWrapper>();
        services.AddSingleton<ILoggerManager, LoggerManager>();
    }

    //mysqlserver
    public static void ConfigureApplicationContext(this IServiceCollection services)
    {
        /**
            AddDbContext : đăng kí ApplicationContext vào IOC container
            AddDbContextPool: giống như AddDbContext , mỗi lần nó sẽ check trong pool xem có thực thể không và lấy ra sử dụng
         */ 
        services.AddDbContext<ApplicationContext>(option =>
            option.UseSqlServer(configuration.GetConnectionString("sqlConnection")));

    }

    //cors
    public static void ConfigureCors(this IServiceCollection services)
    {
        
        services.AddCors(op =>
        {
            op.AddPolicy("CorsPolicy",
            builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
        });
    }

    // iis
    public static void ConfigureIISIntegration(this IServiceCollection services)
    {
        services.Configure<IISOptions>(options =>
        {

        });
    }
}
