import React from 'react';
import { useRecoilValue } from 'recoil';
import { getAll } from '../../stores/selectors/WebConfigSelector';

import Post from '../post';

const PostList = () => {
    const posts = useRecoilValue(getAll);
    return (
        <div>
            {posts?.map((post, i) => {
                return (
                    <Post key={i} {...post} />
                );
            })}
        </div>
    );
}

export default PostList;