using Microsoft.AspNetCore.Mvc;
using AutoMapper;

using Repository.Contracts;
using CongfigEfcore.Models;
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
        ///     lấy tất cả comment trong [GET] api/get/page/id
        /// </summary>
        /// <param name="page">tên page</param>
        /// <param name="id">id page</param>
        /// <returns></returns>
        [HttpGet("get/{page}/{id}")]
        public IActionResult getAllCommentInGroup(string page , string id)
        {
            try
            {
                var allC =_repository.Group.GetAllComment(page , id);
                _loggerManager.Info($"Returned getAllCommentInGroup from database.");
                return Ok(allC);
            }catch (Exception ex)
            {
                _loggerManager.Error($"Something went wrong inside getAllCommentInGroup action: {ex.Message}");
                return StatusCode(500, "server error!");
            }
        }

        /// <summary>
        ///     Tạo mới 1 comment trong name group = page và idCommentGr = idGroup  [Post] api/create/{page}/{idCOmnetGr}
        /// </summary>
        /// <param name="userComment">data from client</param> 
        /// <param name="page">name page curent</param>
        /// <param name="idPage">idGroup of page</param>
        /// <returns></returns>
        [HttpPost("create/{page}/{idPage}")]
        public IActionResult CreateUserComment([FromBody] UserComment userComment, string page, string idPage)
        {
            try
            {
                // check obj
                if (userComment == null)
                {
                    _loggerManager.Error($"Something went wrong inside CreateUserComment : UserComment is null");
                    return BadRequest("Model is null");
                }

                // Validation obj
                if (!ModelState.IsValid)
                {
                    _loggerManager.Error($"Something went wrong inside CreateUserComment : UserComment is not model");
                    return BadRequest("Model is not IsValid");
                }

                // check page && idPage
                var checkPage = _repository.Group.GetGroupWith(page, idPage);
                if (!checkPage)
                {
                    _loggerManager.Error($"Something went wrong inside CreateUserComment : {page}/{idPage} is not found");
                    return BadRequest($"{page}/{idPage} not found");
                }


                bool hasCreateUserComment = _repository.UserComment.CreateUserComment(userComment);
                if (!hasCreateUserComment)
                {
                    _loggerManager.Error($"Something went wrong inside CreateUserComment: create not succes");
                    return StatusCode(500, "Add Not Succes!");
                }
                else
                {
                    _repository.Save();
                    _loggerManager.Info($"Returned CreateUserComment from database.");
                    return Ok("Create Succes!");
                }
            }
            catch (Exception ex)
            {
                _loggerManager.Error($"Something went wrong inside CreateUserComment action: {ex.Message}");
                return StatusCode(500, ex.Message);
            }
       
        }


        /// <summary>
        ///     xóa 1 comment với <paramref name="idUser"/> tại cị trí [HttpDelete] api/delete/{page}/{idPage}"
        /// </summary>
        /// <param name="idRemove">Id UserComment cần xóa</param>
        /// <param name="page">page curent</param>
        /// <param name="idPage">idPage of page</param>
        /// <returns></returns>
        [HttpDelete("delete/{page}/{idPage}/{idRemove}")]
        public IActionResult DeleteUserComment(string page , string idPage ,string idRemove)
        {
            try
            {
                // check page && idPage
                var checkPage = _repository.Group.GetGroupWith(page, idPage);
                if (!checkPage)
                {
                    _loggerManager.Error($"Something went wrong inside DeleteUserComment : {page}/{idPage} is not found");
                    return BadRequest($"{page}/{idPage} not found");
                }

                // check id contain in page
                var checkIdUserComment = _repository.UserComment.HasById(page, idPage, idRemove);
                if (checkIdUserComment == null)
                {
                    _loggerManager.Error($"Something went wrong inside DeleteUserComment : {idRemove} is not found in {page}/{idPage} ");
                    return BadRequest($"{idRemove} not found");
                }

                // kiểm tra page , kiểm tra idCommentGr , kiểm tra idUser có tồn tại không
                var hasDelete = _repository.UserComment.DeleteUserComment(idRemove);
                if (hasDelete)
                {
                    _repository.Save();
                    _loggerManager.Info($"Returned DeleteUserComment from database.");
                    return Ok("Delete Succes!");
                }
                else
                {
                    _loggerManager.Error($"Something went wrong inside DeleteUserComment: delete not succes");
                    return StatusCode(500, "Server Error");
                }
             
            }
            catch (Exception ex)
            {
                _loggerManager.Error($"Something went wrong inside DeleteUserComment action: {ex.Message}");
                return StatusCode(500, "Server Error");
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="page">page curent</param>
        /// <param name="idPage">id of page</param>
        /// <param name="idUpdate">id of UserCOmment need Update</param>
        /// <param name="userComment">new object</param>
        /// <returns></returns>
        [HttpPut("update/{page}/{idPage}/{idUpdate}")]
        public IActionResult UpdateUserComment([FromBody] UserComment userComment ,string page , string idPage , string idUpdate)
        {
            try
            {
                // check obj
                if (userComment == null)
                {
                    _loggerManager.Error($"Something went wrong inside UpdateUserComment : UserComment is null");
                    return BadRequest("Model is null");
                }

                // Validation obj
                if (!ModelState.IsValid)
                {
                    _loggerManager.Error($"Something went wrong inside UpdateUserComment : UserComment is not model");
                    return BadRequest("Model not valid");
                }

                // check page && idPage
                var checkPage = _repository.Group.GetGroupWith(page, idPage);
                if (!checkPage)
                {
                    _loggerManager.Error($"Something went wrong inside UpdateUserComment : {page}/{idPage} is not found");
                    return BadRequest($"{page}/{idUpdate} not found");
                }

                // check id contain in page
                var checkIdUserComment = _repository.UserComment.HasById(page, idPage, idUpdate);
                if (checkIdUserComment == null)
                {
                    _loggerManager.Error($"Something went wrong inside UpdateUserComment : {idUpdate} is not found in {page}/{idPage} ");
                    return BadRequest($"{idUpdate} Not Found");
                }

                bool update = _repository.UserComment.UpdateUserComment(checkIdUserComment , userComment);

                if (update)
                {
                    _repository.Save();
                    _loggerManager.Info($"Returned UpdateUserComment from database.");
                    return Ok("update succes!");
                }
                else
                {
                    _loggerManager.Error($"Something went wrong inside UpdateUserComment: update not succes");
                    return StatusCode(500, "Server Error");
                }
            }catch (Exception ex)
            {
                _loggerManager.Error($"Something went wrong inside UpdateUserComment action: {ex.Message}");
                return StatusCode(500, "Server Error");
            }
           
        }


    }
}
