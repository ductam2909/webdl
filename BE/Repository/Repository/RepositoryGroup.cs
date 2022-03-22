
using CongfigEfcore.Context;
using CongfigEfcore.Models;
using Repository.Contracts;

namespace Repository
{
    public class RepositoryGroup : RepositoryBase<Group>, IRepositoryGroup
    {
        public RepositoryGroup(ApplicationContext applicationContext) : base(applicationContext)
        {
        }
    }
}
