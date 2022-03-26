


using Microsoft.EntityFrameworkCore;

using Repository.Contracts;
using CongfigEfcore.Context;
using System.Linq.Expressions;

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
            applicationContext.Set<T>().Add(entity);
        }

        public void Delete(T entity)
        {
            applicationContext?.Set<T>().Remove(entity);
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
            applicationContext.Set<T>().Update(entity);
        }

        public IQueryable<T> FindCondition(Expression<Func<T, bool>> expression)
        {
            return applicationContext.Set<T>().Where(expression).AsNoTracking();
        }
    }
}
