using Repository.Contracts;
using CongfigEfcore.Context ;

namespace Repository
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private ApplicationContext applicationContext;
        private IRepositoryGroup repositoryGroup;
        private IRepositoryUserComment repositoryUserComment;

        public RepositoryWrapper(ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;
        }

        public IRepositoryGroup Group  {
             get{
                if(repositoryGroup == null)
                    repositoryGroup = new RepositoryGroup(applicationContext);
                return repositoryGroup;
             }
        }

        public IRepositoryUserComment UserComment
        {
            get
            {
                if(repositoryUserComment == null)
                    repositoryUserComment = new RepositoryUserComment(applicationContext);
                return repositoryUserComment;
            }   
        }

        public void Save()
        {
           applicationContext.SaveChanges();
        }
    }
}
