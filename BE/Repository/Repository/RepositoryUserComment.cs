
using CongfigEfcore.Context;
using CongfigEfcore.Models;
using Repository.Contracts;

namespace Repository
{
    public class RepositoryUserComment : RepositoryBase<UserComment>, IRepositoryUserComment
    {
        private ApplicationContext _context;
        public RepositoryUserComment(ApplicationContext applicationContext) : base(applicationContext)
        {
            _context = applicationContext;
        }

        public bool CreateUserComment(UserComment userComment)
        {
            try
            {
                Create(userComment);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }
            return true;
        }

        public bool DeleteUserComment(string idUserComment)
        {
            try
            {
                var getUserCommemnt = _context?.Users?.FirstOrDefault(e => e.Id.ToString().Equals(idUserComment));
                if(getUserCommemnt != null)
                    Delete(getUserCommemnt);
                return getUserCommemnt != null;
            }catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }
        }

        public UserComment HasById(string page, string idPage , string idUserComment)
        {
            var user = _context.Users.FirstOrDefault(e => e.Id.ToString().Equals(idUserComment)
                                      && e.Group.Name.Equals(page) &&
                                      e.Group.GroupId.Equals(idPage));
            return user;
        }

        public bool UpdateUserComment(UserComment oldUerComment , UserComment newUserComment)
        {
            try
            {
                oldUerComment.Text = newUserComment.Text;
                return true;
            }catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }
        }
    }
}
