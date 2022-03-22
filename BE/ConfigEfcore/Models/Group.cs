namespace CongfigEfcore.Models;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


/**
    page/detail/1 or page/cook/2 (name , id)
      
*/


public class Group
{
    /// <summary>
    /// <c>xác định xem GroupId để CURD comment</c>
    /// </summary>
    [Key]
    [Required(ErrorMessage = "GroupId is required!")]
    [StringLength(15, ErrorMessage = "Name can't be longer than 15 characters")]
    public string? GroupId { get; set; }

    /// <summary>
    /// <c>tên của GroupId đó</c>
    /// </summary>
    [Required(ErrorMessage = "Name is required!")]
    [StringLength(15, ErrorMessage = "Name can't be longer than 15 characters")]
    public string? Name { get; set; }

    public ICollection<CommentGroup>? CommentGroups { get; set; }
}