import React, { useState, useEffect } from "react";
import userIcon from "../../../iconUser.png";
import userReply from "../../../iconReply.png";
import userSupport from "../../../iconSupport.png";
import userRemove from "../../../iconRemove.png";

const CommentInfo = ({
	handleShowReply,
	handleShowUpdate,
	isComment,
	isUpdate,
	comment,
	addComment,
	deleteUserComment,
	activity,
	setActivity,
	user,
	idUser,
}) => {
	const [commentArea, setCommentArea] = useState(
		isUpdate ? comment.text : ""
	);

	const t = isComment ? "none" : "light";
	const box = `box ${t}`;

	return (
		<div className={box}>
			<div className="box__icon">
				<div className="box__icon--img">
					<img
						className="box__user--icon"
						src={userIcon}
						alt="icon user"
					/>
				</div>
				<div>
					<h5 className="box--user--name">
						{!isComment ? user : comment.name}
					</h5>
				</div>
			</div>

			<div className="box__information">
				{isComment ? (
					<>
						<div className="information_comment">
							{comment.text}
						</div>
						<div className="information_aciton">
							<img
								className="action"
								src={userReply}
								alt="icon reply"
								onClick={handleShowReply}
							/>
							<img
								className="action"
								src={userSupport}
								alt="icon support"
								onClick={handleShowUpdate}
							/>
							<img
								className="action"
								src={userRemove}
								alt="icon remove"
								onClick={() => deleteUserComment(comment.id)}
							/>
						</div>
					</>
				) : (
					<>
						<textarea
							value={commentArea}
							onChange={e => {
								setCommentArea(e.target.value);
							}}
							className="information_comment"
						/>
						<div className="information_aciton">
							<button
								className="action btn btn--success"
								onClick={() => {
									addComment(
										isUpdate ? comment.id : -1,
										idUser,
										user,
										commentArea,
										isUpdate
											? comment.replyUserId === ""
												? "-1"
												: comment.replyUserId
											: comment.replyUserCommentId === -1
											? "-1"
											: comment.userId,
										isUpdate &&
											comment.replyUserCommentId !== -1
											? comment.replyUserCommentId
											: comment.id === undefined
											? -1
											: comment.id,
										comment.groupId,
										isUpdate
									);
									setCommentArea("");
								}}>
								{isUpdate ? "Update" : "Comment"}
							</button>
							<button
								className="action btn"
								onClick={
									isUpdate
										? handleShowUpdate
										: handleShowReply
								}>
								Cancel
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default CommentInfo;
