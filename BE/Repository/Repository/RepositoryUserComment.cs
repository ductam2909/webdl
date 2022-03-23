
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

        public IEnumerable<UserComment> GetChildUserComments(string page, string idCommentGr, string id)
        {
            var childs = _context?.Users?.Where(e =>
                                            e.CommentGroup.Group.Name.Equals(page)
                                            && e.CommentGroup.CommentId.Equals(idCommentGr)
                                           && e.ReplyUserCommentId.ToString().Equals(id)).OrderBy(x => x.CreateAt).ToList();
            return childs;
        }

        public bool CreateUserComment(UserComment userComment, string page, string id)
        {
            try
            {
                _context.Add(userComment);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }
            return true;
        }
    }
}
