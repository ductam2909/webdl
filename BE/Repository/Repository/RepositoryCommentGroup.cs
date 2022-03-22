
using CongfigEfcore.Context;
using CongfigEfcore.Models;
using Repository.Contracts;

namespace Repository
{
    public class RepositoryCommentGroup : RepositoryBase<CommentGroup>, IRepositoryCommentGroup
    {
        private ApplicationContext _context;

        public RepositoryCommentGroup(ApplicationContext applicationContext) : base(applicationContext)
        {
            _context = applicationContext;
        }

        public IEnumerable<CommentGroup> getRootUserComment(string name , string id)
        {         
            var boxs = _context?.Comments?.Where(e => e.GroupId.Equals(id) && e.Group.Name.Equals(name)).ToList();      
            for(int i = 0; i < boxs?.Count; i++)
               _context?.Users?
                    .Where(e => e.CommentGroup.GroupId.Equals(boxs[i].GroupId) 
                             && e.CommentGroupId.Equals(boxs[i].CommentId)
                             && e.ReplyUserCommentId == -1).
                                OrderBy(e => e.CreateAt).
                                ToList();           
            return boxs;
        }
    }
}
