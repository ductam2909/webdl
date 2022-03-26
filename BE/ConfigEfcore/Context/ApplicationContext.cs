namespace CongfigEfcore.Context;

using Microsoft.EntityFrameworkCore;

using CongfigEfcore.Models;
using CongfigEfcore.Configuration;

/*
    DbContext có 3 properties:
        Database : tương ứng với một phiên trong db , 
        ChangeTracker: theo dõi trạng thái của model
        Model: Cung cấp khả năng truy cập vào db bằng efcore khi connect hay tạo bảng
 */

public class ApplicationContext : DbContext
{
    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfiguration(new GroupConfiguration());
        
        modelBuilder.ApplyConfiguration(new UserCommentConfiguration());



    }

    public DbSet<Group>? Groups { get; set; }


    public DbSet<UserComment>? Users { get; set; }


}