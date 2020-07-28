import React from 'react';

const Post = (props) => {
    const { date, title, content } = props;
    return (
        <div>
            <p>{date}</p>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    );
}

export default Post;