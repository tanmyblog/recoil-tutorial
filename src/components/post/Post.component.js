import React from 'react';
import { Link } from 'react-router-dom';

import './Post.style.scss';

import { useRecoilValue } from 'recoil';
import { WebConfigState } from '../../stores/atoms/WebConfigAtom';

const icons = {
    likeW: require('../../assets/icons/likeW.svg'),
    likeG: require('../../assets/icons/likeG.svg'),
};

const Post = (props) => {
    const darkMode = useRecoilValue(WebConfigState);

    const { id, date, title, desc, content, statistics } = props;

    return (
        <div className={`Post ${darkMode ? 'Post--dark-mode' : ''}`}>
            <h2>{title}</h2>
            <p>{date}</p>
            <p className={`desc ${darkMode ? 'desc--dark-mode' : ''}`}>{desc}</p>
            <p className={'content'}>{content}</p>
            <Link to={`/post/${id}`}>More ... </Link>
            <div className={'interacion'}>
                <img className={`like`} src={icons[`${darkMode ? 'likeW' : 'likeG'}`]} />
                <span>{statistics.likes}</span>
                <img className={`dislike`} src={icons[`${darkMode ? 'likeW' : 'likeG'}`]} />
                <span>{statistics.dislikes}</span>
            </div>
        </div>
    );
}

export default Post;