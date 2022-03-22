using Microsoft.AspNetCore.Mvc;
using AutoMapper;

using Repository.Contracts;
using ConfigEfcore.Dto;




namespace Domain.Controllers
{
    [ApiController]
    [Route("api")]
    public class PageController : Controller
    {

        private IRepositoryWrapper _repository;
        private IMapper _mapper;
        private ILoggerManager _loggerManager;

        public PageController(IRepositoryWrapper repository, IMapper mapper, ILoggerManager loggerManager)
        {
            _repository = repository;
            _mapper = mapper;
            _loggerManager = loggerManager;
        }

        /// <summary>
        ///     <c> [GET] api/page/id </c>
        /// </summary>
        /// <param"id"></param>
        /// <returns>Trả về những CommentGroup có trong page</returns>
        [HttpGet("{name}/{id}")]
        public IActionResult GetRootCommentGroup(string name, string id)
        {
            try
            {
                var userComment = _repository.CommentGroup.getRootUserComment(name, id);
                _loggerManager.Info($"Returned all CommentGroup from database.");
                return Ok(userComment);
            }
            catch (Exception ex)
            {
                _loggerManager.Error($"Something went wrong inside GetAllCommentGroup action: {ex.Message}");
                return StatusCode(500, "Server Error");
            }
        }

        /// <summary>
        ///     <c> [GET] api/page/idCommentGr/id </c>
        /// </summary>
        /// <param"id"></param>
        /// <returns>Trả về những ChildUserComponent có trong UserComponent</returns>
        [HttpGet("{page}/{idCommentGr}/children/{id}")]
        public IActionResult getChildFromUserComment(string page, string idCommentGr, string id)
        {
            try
            {
                var listChild = _repository.UserComment.GetChildUserComments(page, idCommentGr, id);
                _loggerManager.Info($"Returned Child UserComment from database.");
                return Ok(listChild);
            }
            catch (Exception ex)
            {
                _loggerManager.Error($"Something went wrong inside getChildFromUserComment action: {ex.Message}");
                return StatusCode(500, "Server Error");
            }
        }


    }
}
