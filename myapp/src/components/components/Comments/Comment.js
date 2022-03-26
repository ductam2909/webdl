import React, { useState, useEffect } from "react";
import CommentInfo from "./CommentInfo";

const Comment = ({
	activity,
	addComment,
	deleteUserComment,
	getReplys,
	setActivity,
	comment,
	user,
	idUser,
}) => {
	const replys = getReplys(comment.id);

	console.log("re = " + replys);

	const showReply =
		activity && comment.id === activity.id && activity.type === "replying";

	const showUpdate =
		activity && comment.id === activity.id && activity.type === "updating";

	const handleShowReply = () => {
		var active = {
			id: comment.id,
			idUser: comment.userId,
			type: "replying",
		};
		if (active.id === activity?.id && activity.type !== "updating") {
			active = null;
		}
		setActivity(active);
	};

	const handleShowUpdate = () => {
		if (comment.userId !== idUser) return;
		var active = {
			id: comment.id,
			idUser: comment.userId,
			type: "updating",
		};
		if (active.id === activity?.id && activity.type !== "replying") {
			active = null;
		}
		setActivity(active);
	};

	return (
		<div>
			<ul>
				<CommentInfo
					handleShowReply={handleShowReply}
					handleShowUpdate={handleShowUpdate}
					deleteUserComment={deleteUserComment}
					isComment={true}
					comment={comment}
					activity={activity}
					setActivity={setActivity}
				/>
				{showReply && (
					<ul>
						<CommentInfo
							handleShowReply={handleShowReply}
							isComment={false}
							addComment={addComment}
							deleteUserComment={deleteUserComment}
							comment={comment}
							activity={activity}
							setActivity={setActivity}
							user={user}
							idUser={idUser}
						/>
					</ul>
				)}
				{showUpdate && (
					<ul>
						<CommentInfo
							isUpdate={true}
							addComment={addComment}
							deleteUserComment={deleteUserComment}
							handleShowUpdate={handleShowUpdate}
							comment={comment}
							activity={activity}
							setActivity={setActivity}
							user={user}
							idUser={idUser}
						/>
					</ul>
				)}
				{replys.length > 0 &&
					replys.map(reply => (
						<Comment
							key={Math.random().toString(36).substr(2, 9)}
							addComment={addComment}
							deleteUserComment={deleteUserComment}
							activity={activity}
							setActivity={setActivity}
							comment={reply}
							getReplys={getReplys}
							user={user}
							idUser={idUser}
						/>
					))}
			</ul>
		</div>
	);
};

export default Comment;
