import React from "react";

import { useState, useEffect, useRef } from "react";

import {
	getComment as getCommentApi,
	createComment as createCommentApi,
	addUserComment as addUserCommentApi,
	deleteUserComment as deleteUserCommentApi,
	updateUserComment as updateUserCommentApi,
} from "../../../util/ApiComment";
import Comment from "./Comment";
import CommentInfo from "./CommentInfo";
import "../../../styles/comments.css";

const CommentPages = ({ name, id, user, idUser }) => {
	const mount = useRef(true);
	const [listComments, setListComments] = useState([]);
	const [activity, setActivity] = useState(null);
	const [rootComment, setRootComment] = useState([]);
	const [commnetSeft, setCommentSeft] = useState({
		userId: idUser,
		name: user,
		replyUserId: "-1",
		replyUserCommentId: -1,
		text: "",
		groupId: id,
	});

	console.log(commnetSeft);

	const addComment = async (
		idComment,
		UserId,
		Name,
		text,
		ReplyUserId,
		ReplyUserCommentId,
		GroupId,
		isUpdate = false
	) => {
		createCommentApi(
			UserId,
			Name,
			ReplyUserId,
			ReplyUserCommentId,
			text,
			GroupId
		).then(comment => {
			console.log(comment);
			if (!isUpdate) {
				addUserCommentApi(name, id, comment).then(res => {
					console.log(res);
					if (res.status === 200) {
						getAllComment().then(() => {
							setActivity(null);
							getRootComment();
						});
					} else {
						alert("thêm thất bai!");
					}
				});
			} else {
				updateUserCommentApi(name, id, idComment, comment).then(res => {
					console.log(res);
					if (res.status === 200) {
						getAllComment().then(() => {
							setActivity(null);
							getRootComment();
						});
					} else {
						alert("update thất bai!");
					}
				});
			}
		});
	};

	const deleteUserComment = idUser => {
		deleteUserCommentApi(name, id, idUser).then(res => {
			console.log(res);
			if (res.status === 200) {
				getAllComment().then(() => {
					setActivity(null);
					getRootComment();
				});
			} else {
				alert("delete thất bại");
			}
		});
	};

	const getReplys = commentId => {
		const getGr = listComments.filter(
			e => e.replyUserCommentId === commentId
		);
		return getGr;
	};

	const getRootComment = async () => {
		if (listComments) {
			const arr = [];
			listComments.forEach(comment => {
				if (comment.replyUserCommentId === -1) arr.push(comment);
			});
			setRootComment(arr);
		}
	};

	const getAllComment = async () => {
		getCommentApi(name, id)
			.then(res => res.data)
			.then(data => {
				if (mount.current) {
					setListComments(data);
				}
			});
	};

	useEffect(() => {
		getRootComment();
	}, [listComments]);

	useEffect(() => {
		mount.current = true;
		getAllComment();
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
			<div style={{ marginLeft: "100px" }}>
				<button>Write Comment</button>
				<CommentInfo
					isComment={false}
					user={user}
					idUser={idUser}
					comment={commnetSeft}
					addComment={addComment}
				/>
			</div>

			{rootComment.map(comment => {
				return (
					<Comment
						key={comment.id}
						activity={activity}
						setActivity={setActivity}
						addComment={addComment}
						deleteUserComment={deleteUserComment}
						getReplys={getReplys}
						comment={comment}
						user={user}
						idUser={idUser}
					/>
				);
			})}
		</div>
	);
};

export default CommentPages;
