import React from 'react';
import { useRecoilValueLoadable } from 'recoil';

import './PostList.style.scss';

import { Layout, Progress } from '../common';
import Post from '../post';

import { getAll } from '../../stores/selectors/WebConfigSelector';

const PostList = () => {
    const posts = useRecoilValueLoadable(getAll);

    const renderPosts = () => {
        switch (posts.state) {
            case 'hasValue':
                return posts?.contents?.map((post, i) => {
                    return (
                        <Post key={i} {...post} />
                    );
                });

            case 'loading':
            case 'hasError':
            default: return (<Progress />);
        }
    }

    return (
        <Layout>
            <div className={`PostList`}>
                {renderPosts()}
            </div>
        </Layout>
    );
}

export default PostList;