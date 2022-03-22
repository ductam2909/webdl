import React, { useState, useEffect } from "react";
import CommentInfo from "./CommentInfo";

const Comment = ({ activity, addComment, getReplys, setActivity, comment }) => {
	const [replys, setReplys] = useState([]);
	const showReply =
		activity && comment.id === activity.id && activity.type === "replying";

	const handleShowReply = () => {
		var active = {
			id: comment.id,
			type: "replying",
		};
		if (active.id === activity?.id) {
			active = null;
		}
		setActivity(active);
	};

	useEffect(() => {
		getReplys(comment.commentGroupId, comment.id).then(res => {
			setReplys(res.data);
		});
	}, []);

	return (
		<div>
			<ul>
				<CommentInfo
					handleShowReply={handleShowReply}
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
							comment={comment}
							activity={activity}
							setActivity={setActivity}
						/>
					</ul>
				)}
				{replys.length > 0 &&
					replys.map(reply => (
						<Comment
							key={Math.random().toString(36).substr(2, 9)}
							addComment={addComment}
							activity={activity}
							setActivity={setActivity}
							comment={reply}
							getReplys={getReplys}
						/>
					))}
			</ul>
		</div>
	);
};

export default Comment;
