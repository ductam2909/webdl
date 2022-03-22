using CongfigEfcore.Models;

namespace Repository.Contracts
{
    public interface IRepositoryUserComment : IRepositoryBase<UserComment>
    {
        public IEnumerable<UserComment> GetChildUserComments(string page, string idCommentGr, string id);
    }
}
