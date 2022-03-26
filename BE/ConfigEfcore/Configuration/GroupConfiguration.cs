namespace CongfigEfcore.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using CongfigEfcore.Models;

public class GroupConfiguration : IEntityTypeConfiguration<Group>
{

    public void Configure(EntityTypeBuilder<Group> builder)
    {
        /*
         trong Entity Group:
             + có nhiều CommentGroups
             + mỗi CommentGroups lại ở 1 Group
             + set GroupId trong CommentGroups là kháo ngoại
             + khi xóa 1 Group thì sẽ xóa hết CommentGroups với thuộc tính Cascade
      */

        builder
            .HasMany(s => s.UserComments)
            .WithOne(s => s.Group)
            .HasForeignKey(s => s.GroupId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
           .HasData(
               new Group
               {
                   GroupId = 1 + "",
                   Name = "detail"
               }
           );
    }

}

