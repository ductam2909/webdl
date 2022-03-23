import axios from "axios";
import { urlListComments as url } from "../constains/comments";

export const getComment = (name, id) => {
	if (!id) id = "";
	return axios(`${url}/${name}/${id}`);
};

export const addUserComment = (page, id, userComment) => {
	if (!id) id = "";
	return axios.post(`${url}/create/${page}/${id}`, userComment);
};

export const getChildren = (page, pageId, id) => {
	return axios(`${url}/${page}/${pageId}/children/${id}`);
};

/*
		Id : auto
		UserId: ID user
		Name: Tên User,
		ReplyUserId: Id ReplyUser,
		ReplyUserCommentId: Id UserComment
		Text : Nội dung
		CommentGroupId : Id CommemtGroup
	*/
export const createComment = async (
	UserId,
	Name,
	ReplyUserId,
	ReplyUserCommentId,
	Text,
	CommentGroupId
) => {
	return {
		UserId,
		Name,
		ReplyUserId,
		ReplyUserCommentId,
		Text,
		CommentGroupId,
	};
};
