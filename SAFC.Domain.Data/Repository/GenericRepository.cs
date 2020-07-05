
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SAFC.Domain.Data
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly ApplicationDbContext _context;
       // private DbContext db { get { return _context; } }

        public GenericRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public IEnumerable<T> SelectAll()
        {
            return _context.Set<T>().ToList();
        }
        public T SelectByID(object id)
        {
            return _context.Set<T>().Find(id);
        }
        public void Insert(T obj)
        {
            _context.Set<T>().Add(obj);
        }
        public void Update(T obj)
        {
            _context.Set<T>().Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
        }
        public void Delete(object id)
        {
            T existing = _context.Set<T>().Find(id);
            _context.Set<T>().Remove(existing);
        }
        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
