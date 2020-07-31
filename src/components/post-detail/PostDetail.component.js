import React from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import './PostDetail.style.scss';

import { Layout, Progress } from '../common';

import { getById } from '../../stores/selectors/PostSelector';
import { WebConfigState } from '../../stores/atoms/WebConfigAtom';

const icons = {
    likeW: require('../../assets/icons/likeW.svg'),
    likeG: require('../../assets/icons/likeG.svg'),
};

const PostDetail = ({ match }) => {
    const { params: { id } } = match;

    const darkMode = useRecoilValue(WebConfigState);
    const post = useRecoilValueLoadable(getById(id));

    const renderPost = () => {
        switch (post.state) {
            case 'hasValue':
                const { date, title, desc, content, statistics } = post.contents;
                return (
                    <div className={`Post ${darkMode ? 'Post--dark-mode' : ''}`}>
                        <h2>{title}</h2>
                        <p>{date}</p>
                        <p className={`desc ${darkMode ? 'desc--dark-mode' : ''}`}>{desc}</p>
                        <p className={'content'}>{content}</p>
                        <div className={'interacion'}>
                            <img className={`like`} src={icons[`${darkMode ? 'likeW' : 'likeG'}`]} />
                            <span>{statistics?.likes}</span>
                            <img className={`dislike`} src={icons[`${darkMode ? 'likeW' : 'likeG'}`]} />
                            <span>{statistics?.dislikes}</span>
                        </div>
                    </div>
                );

            case 'loading':
            case 'hasError':
            default: return (<Progress />);
        }
    }

    return (
        <Layout>
            <div className={`PostList`}>
                {renderPost()}
            </div>
        </Layout>
    );
}

export default PostDetail;