namespace CongfigEfcore.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using CongfigEfcore.Models;

public class CommentConfiguration : IEntityTypeConfiguration<CommentGroup>
{

    public void Configure(EntityTypeBuilder<CommentGroup> builder)
    {
        /*
            trong Entity CommentGroup:
                + có nhiều UserComments
                + mỗi comment lại ở 1 CommentGroup
                + set CommentGroupId trong UserComments là khóa ngoại
                + khi xóa 1 CommentGroup thì sẽ xóa hết UserComments với thuộc tính Cascade
         */
        builder
            .HasMany(s => s.UserComments)
           .WithOne(s => s.CommentGroup)
           .HasForeignKey(s => s.CommentGroupId)
           .OnDelete(DeleteBehavior.Cascade);

        builder
             .HasData(
                new CommentGroup
                {
                    CommentId = 1 + "",
                    GroupId = 1 + "",
                }
                ,
                new CommentGroup
                {
                    CommentId = 2 + "",
                    GroupId = 1 + "",
                }
            );

    }

}

/*
    group 1:
        A 1
            B 2
                A 3
        A 4
            B 5
 */ 
