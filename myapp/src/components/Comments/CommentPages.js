import React from "react";

import { useState, useEffect, useRef } from "react";

import {
	getComment as getCommentApi,
	getChildren as getChildrenApi,
	createComment as createCommentApi,
} from "../../util/ApiComment";
import Comment from "./Comment";
import "../../styles/comments.css";

const CommentPages = ({ name, id }) => {
	const mount = useRef(true);
	const [listComments, setListComments] = useState([]);
	const [activity, setActivity] = useState(null);

	console.log(listComments);

	const addComment = (text, parentId) => {
		console.log(text, parentId);
		// createCommentApi(text, parentId).then(comment => {
		// 	console.log(comment);
		// });
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
		<div>
			<h1>Comment List</h1>
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
						/>
					);
				});
			})}
		</div>
	);
};

export default CommentPages;
