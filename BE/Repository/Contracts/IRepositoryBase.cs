﻿

namespace Repository.Contracts
{
    public interface IRepositoryBase<T>
    {
        IQueryable<T> GetAll();
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);

    }
}
