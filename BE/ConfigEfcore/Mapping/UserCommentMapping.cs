using AutoMapper;


using CongfigEfcore.Models;
using ConfigEfcore.Dto;


namespace ConfigEfcore.Mapping
{
    public class UserCommentMapping : Profile
    {
        public UserCommentMapping()
        {
            CreateMap<UserComment, UserCommentDto>().ReverseMap();
        }
    }
}
