using CongfigEfcore.Models;

namespace Repository.Contracts
{
    public interface IRepositoryUserComment : IRepositoryBase<UserComment>
    {
        public bool CreateUserComment(UserComment userComment);

        public bool DeleteUserComment(string idUserComment);

        public bool UpdateUserComment(UserComment oldUerComment , UserComment newUserComment);

        public UserComment HasById(string page , string idPage , string idUserComment);
    }
}
