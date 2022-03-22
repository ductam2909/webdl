import axios from "axios";
import { urlListComments as url } from "../constains/comments";

export const getComment = (name, id) => {
	if (!id) id = "";
	return axios(`${url}/${name}/${id}`);
};

export const getChildren = (page, pageId, id) => {
	return axios(`${url}/${page}/${pageId}/children/${id}`);
};

export const createComment = async (text, parentId) => {
	return {
		id: Math.random().toString(36).substr(2, 9),
		userId: 1,
		userName: "",
		parentId,
		comment: text,
		create: "27/08/2000#19:41",
		replys: [],
	};
};
