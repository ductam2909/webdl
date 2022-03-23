import React from "react";

import { useState, useEffect, useRef } from "react";

import {
	getComment as getCommentApi,
	getChildren as getChildrenApi,
	createComment as createCommentApi,
	addUserComment as addUserCommentApi,
} from "../../util/ApiComment";
import Comment from "./Comment";
import "../../styles/comments.css";

const CommentPages = ({ name, id, user, idUser }) => {
	const mount = useRef(true);
	const [listComments, setListComments] = useState([]);
	const [activity, setActivity] = useState(null);

	console.log(listComments);

	const addComment = (
		UserId,
		Name,
		text,
		ReplyUserId,
		ReplyUserCommentId,
		CommentGroupId
	) => {
		console.log(
			UserId,
			Name,
			text,
			ReplyUserId,
			ReplyUserCommentId,
			CommentGroupId
		);
		createCommentApi(
			UserId,
			Name,
			ReplyUserId,
			ReplyUserCommentId,
			text,
			CommentGroupId
		).then(comment => {
			console.log(comment);
			addUserCommentApi(name, id, comment).then(comment => {
				if (comment.status === 200) {
					setActivity({
						id: 0,
						type: "add",
					});
				} else {
					alert("thêm thất bại");
				}
			});
		});
	};

	const getReplys = (idGr, idComment) => {
		return getChildrenApi(name, idGr, idComment);
	};

	useEffect(() => {
		mount.current = true;
		getCommentApi(name, id)
			.then(res => res.data)
			.then(data => {
				if (mount.current) setListComments(data);
			});
		return () => (mount.current = false);
	}, []);

	return (
		<div
			style={{
				marginLeft: "-50px",
				height: "800px",
				overflow: "auto",
			}}>
			{listComments.length === 0 && (
				<svg viewBox="25 25 50 50">
					<circle cx="50" cy="50" r="20"></circle>
				</svg>
			)}
			{listComments.map(comments => {
				return comments.userComments.map(comment => {
					return (
						<Comment
							key={comment.id}
							activity={activity}
							setActivity={setActivity}
							addComment={addComment}
							getReplys={getReplys}
							comment={comment}
							user={user}
							idUser={idUser}
						/>
					);
				});
			})}
		</div>
	);
};

export default CommentPages;
