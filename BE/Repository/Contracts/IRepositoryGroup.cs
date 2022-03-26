using CongfigEfcore.Models;


namespace Repository.Contracts
{
    public interface IRepositoryGroup : IRepositoryBase<Group>
    {
        public IEnumerable<UserComment> GetAllComment(string page , string id);

        public bool GetGroupWith(string page , string id);
    }
}
