import React from 'react';
import Post from './Post.js';

const PostList = ({ data }) => {
	return (
		<div className="post-container">
			{data.map((post) => {
				return <Post title={post.title} contents={post.contents} />;
			})}
		</div>
	);
};

export default PostList;
