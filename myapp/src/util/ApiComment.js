import axios from "axios";
import { urlListComments as url } from "../constains/comments";

export const getComment = (name, id) => {
	if (!id) id = "";
	return axios(`${url}/get/${name}/${id}`);
};

export const addUserComment = (page, id, userComment) => {
	if (!id) id = "";
	return axios.post(`${url}/create/${page}/${id}`, userComment);
};

export const deleteUserComment = (page, idPage, id) => {
	return axios.delete(`${url}/delete/${page}/${idPage}/${id}`);
};

export const updateUserComment = (page, idPage, idUpdate, userComment) => {
	return axios.put(
		`${url}/update/${page}/${idPage}/${idUpdate}`,
		userComment
	);
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
	groupId
) => {
	return {
		UserId,
		Name,
		ReplyUserId,
		ReplyUserCommentId,
		Text,
		groupId,
	};
};
