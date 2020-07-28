import React from 'react';

import './MainContent.style.scss';

import PostList from '../post-list';

const MainContent = () => {
    return (
        <div className={`Main`}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <PostList />
            </React.Suspense>
        </div>
    );
}

export default MainContent;