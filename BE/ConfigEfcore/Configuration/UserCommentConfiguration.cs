namespace CongfigEfcore.Configuration;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using CongfigEfcore.Models;

/* visual
    1
        2
            1
            3
        4
    2
        1
 */ 

public class UserCommentConfiguration : IEntityTypeConfiguration<UserComment>
{

    public void Configure(EntityTypeBuilder<UserComment> builder)
    {

        
        builder
           .HasData(
               new UserComment
               {
                   Id = 1,
                   UserId = 1 + "",
                   Name = "Nguyễn Thanh Huy",
                   CommentGroupId = 1 + "",
                   ReplyUserId = "",
                   ReplyUserCommentId = -1,
                   Text = "How to build comment chat Ef core?",
                   CreateAt = new DateTime(2000, 8, 27, 3, 11, 48)
               },
               new UserComment
               {
                   Id = 2,
                   UserId = 2 + "",
                   Name = "Nguyễn Thị Thu Diệu",
                   CommentGroupId = 1 + "",
                   ReplyUserId = 1 + "",
                   ReplyUserCommentId= 1,
                   Text = "wacth yuotube and i have link create db https://code-maze.com/entity-framework-core-series/",
                   CreateAt = new DateTime(2000, 8, 27, 3, 12, 55)
               },
               new UserComment
               {
                   Id = 3,
                   UserId = 1 + "",
                   Name = "Nguyễn Thanh Huy",
                   CommentGroupId = 1 + "",
                   ReplyUserId = 2 + "",
                   ReplyUserCommentId = 2,
                   Text = "yeah tks yous, i try!",
                   CreateAt = new DateTime(2000, 8, 27, 3, 13, 56)
               },
               new UserComment
               {
                   Id = 4,
                   UserId = 3 + "",
                   Name = "Amino Oreki",
                   CommentGroupId = 1 + "",
                   ReplyUserId = 2 + "",
                   ReplyUserCommentId = 2,
                   Text = "wow , great link , tks you?",
                   CreateAt = new DateTime(2000, 8, 27, 4, 15, 20)
               },
               new UserComment
               {
                   Id = 5,
                   UserId = 4 + "",
                   Name = "Nguyễn Văn A",
                   CommentGroupId = 1 + "",
                   ReplyUserId = 1 + "",
                   ReplyUserCommentId = 1,
                   Text = "inbox me ...",
                   CreateAt = new DateTime(2000, 8, 27, 3, 13, 41)
               }
               ,
               new UserComment
               {
                   Id = 6,
                   UserId = 2 + "",
                   Name = "Nguyễn Thị Thu Diệu",
                   CommentGroupId = 2 + "",
                   ReplyUserId = "",
                   ReplyUserCommentId = -1,
                   Text = "Kiến thức thật tuyệt vời , thật tuyệt khi được biết đến chúng!",
                   CreateAt = new DateTime(2000, 10, 27, 2, 45, 41)
               },
               new UserComment
               {
                   Id = 7,
                   UserId = 1 + "",
                   Name = "Nguyễn Thanh Huy",
                   CommentGroupId = 2 + "",
                   ReplyUserId = 2 + "",
                   ReplyUserCommentId = 6,
                   Text = "không có chi nè!",
                   CreateAt = new DateTime(2000, 10, 27, 2, 46, 2)
               }
           ) ;
    }

}

