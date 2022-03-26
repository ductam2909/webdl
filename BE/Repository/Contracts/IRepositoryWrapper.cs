
namespace Repository.Contracts
{
    public interface IRepositoryWrapper
    {
        IRepositoryGroup Group { get; }
                
        IRepositoryUserComment UserComment {  get; }

        void Save();
    }
}
