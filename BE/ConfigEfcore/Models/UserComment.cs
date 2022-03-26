
namespace CongfigEfcore.Models;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;





public class UserComment
{
    /// <summary>
    ///    <c>xác định Id cho comment</c>
    /// </summary>
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    /// <summary>
    ///     <c>xác định Id của người viết comment</c>
    /// </summary>
    [Required(ErrorMessage = "UserId is required!")]
    [StringLength(15, ErrorMessage = "UserId can't be longer than 15 characters")]
    public string? UserId { get; set; }

    /// <summary>
    /// <c>Tên của người viết comment</c>
    /// </summary>
    [Required(ErrorMessage = "Name is required!")]
    public string? Name { get; set; }

    /// <summary>
    /// <c>xác định comment này sẽ trả lời người dùng nào</c>
    /// </summary>
    [Required(ErrorMessage = "ReplyUserId is required!")]
    [StringLength(15, ErrorMessage = "ReplyUserId can't be longer than 15 characters")]
    public string? ReplyUserId { get; set; }

    /// <summary>
    /// <c>Xác định xem comment chat với Id Comment nào</c>
    /// </summary>
    public int ReplyUserCommentId { get; set; }

    /// <summary>
    /// <c>Nội dung comment của người dùng</c>
    /// </summary>
    [StringLength(100, ErrorMessage = "ReplyCommendId can't be longer than 100 characters")]
    public string? Text { get; set; }

    /// <summary>
    /// <c>Thời Gian tạo Comment</c>
    /// </summary>
    [DataType(DataType.Date)]
    public DateTime CreateAt { get; set; } = DateTime.Now;

    /// <summary>
    /// <c>Xác định các comment nằm trong CommentGroup nào</c>
    /// </summary>
    [Required(ErrorMessage = "GroupId is required!")]
    [StringLength(15, ErrorMessage = "GroupId can't be longer than 15 characters")]
    public string? GroupId { get; set; }

    public Group? Group { get; set; }
}