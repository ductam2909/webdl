import React, { useState } from "react";
import userIcon from "../../iconUser.png";
import userReply from "../../iconReply.png";
import userSupport from "../../iconSupport.png";
import userRemove from "../../iconRemove.png";

const CommentInfo = ({
	handleShowReply,
	isComment,
	comment,
	addComment,
	activity,
	setActivity,
	user,
	idUser,
}) => {
	const [commentArea, setCommentArea] = useState("");

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
						{!user ? comment.name : user}
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
							/>
							<img
								className="action"
								src={userRemove}
								alt="icon remove"
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
										idUser,
										user,
										commentArea,
										comment.userId,
										comment.id,
										comment.commentGroupId
									);
								}}>
								Comment
							</button>
							<button className="action btn">Cancel</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default CommentInfo;
