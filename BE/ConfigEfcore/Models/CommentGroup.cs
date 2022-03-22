
namespace CongfigEfcore.Models;

using System;
using System.ComponentModel.DataAnnotations;



public class CommentGroup
{
    /// <summary>
    /// <c>xác định xem trong GroupId thì có bao nhiêu CommentGroup được hình thành</c>
    /// </summary>
    [Key]
    [Required(ErrorMessage = "CommentId is required!")]
    [StringLength(15, ErrorMessage = "CommentId can't be longer than 15 characters")]
    public string? CommentId { get; set; }

    /// <summary>
    /// <c>xác định xem GroupId để CURD comment</c>
    /// </summary>
    [Required(ErrorMessage = "GroupId is required!")]
    [StringLength(15, ErrorMessage = "GroupId can't be longer than 15 characters")]
    public string? GroupId { get; set; }

    public Group? Group { get; set; }

    public ICollection<UserComment>? UserComments { get; set; }
}

