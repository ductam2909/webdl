
namespace Repository.Contracts
{
    public interface IRepositoryWrapper
    {
        IRepositoryGroup Group { get; }
        
        IRepositoryCommentGroup CommentGroup {  get; }
        
        IRepositoryUserComment UserComment {  get; }

        void Save();
    }
}
