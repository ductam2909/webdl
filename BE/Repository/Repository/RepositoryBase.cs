


using Microsoft.EntityFrameworkCore;

using Repository.Contracts;
using CongfigEfcore.Context;


namespace Repository
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {

        protected ApplicationContext  applicationContext { get; set; }

        public RepositoryBase(ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;
        }


        public void Create(T entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(T entity)
        {
            throw new NotImplementedException();
        }

        /**
            lấy tất cả các bản ghi từ thực thể T và bỏ chế độ tracker bằng method AsNoTracking()
         */ 
        public IQueryable<T> GetAll()
        {
            return applicationContext.Set<T>().AsNoTracking();
        }

        public void Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
