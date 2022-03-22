
namespace ConfigEfcore.Dto
{
    public class UserCommentDto
    {
        public int Id { get; set; }
        public string? UserId { get; set; }
        public string? Name { get; set; }
        public string? ReplyUserId { get; set; }
        public string? ReplyUserCommentId { get; set; }
        public string? Text { get; set; }
        public DateTime CreateAt { get; set; }
    }
}
