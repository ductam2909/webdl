
using CongfigEfcore.Context;
using CongfigEfcore.Models;
using Repository.Contracts;

namespace Repository
{
    public class RepositoryGroup : RepositoryBase<Group>, IRepositoryGroup
    {

        private ApplicationContext _context;
        public RepositoryGroup(ApplicationContext applicationContext) : base(applicationContext)
        {
            _context = applicationContext;
        }

        public IEnumerable<UserComment> GetAllComment(string page, string id)
        {
            var allC = _context?.Users?.Where(e => e.Group.Name.Equals(page) && e.Group.GroupId.Equals(id)).ToList();
            return allC;
        }
            
        public bool GetGroupWith(string page , string id)
        {
            var box = _context.Groups.FirstOrDefault(e => e.Name.Equals(page) && e.GroupId.Equals(id));
            return box != null;
        }
    }
}
