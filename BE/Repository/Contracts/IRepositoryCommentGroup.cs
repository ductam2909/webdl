using CongfigEfcore.Models;

namespace Repository.Contracts
{
    public interface IRepositoryCommentGroup : IRepositoryBase<CommentGroup>
    {
        /// <summary>
        ///     <c>Tập hợp những UserComment trong CommentGroup</c>
        /// </summary>
        /// param name="name">xác định tên page</param>
        /// <param name="id">xác định CommentGroup</param>
        /// <returns></returns>
        IEnumerable<CommentGroup> getRootUserComment(string name , string id);
    }
}


