import React from 'react';

const Post = ({ title, contents }) => {
	return (
		<div className="post-card">
			<h2>{title}</h2>
			<p>{contents}</p>
		</div>
	);
};

export default Post;
