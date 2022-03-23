
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


    }
}
