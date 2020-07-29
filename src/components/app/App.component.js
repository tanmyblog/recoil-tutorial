import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import './App.style.scss';

import { WebConfigState } from '../../stores/atoms/WebConfigAtom';

import PostList from '../post-list';
import PostDetail from '../post-detail';
import Header from '../common/header';

const App = () => {
    const darkMode = useRecoilValue(WebConfigState);
    return (
        <BrowserRouter>
            <div className={`App ${darkMode ? 'App--dark-mode' : ''}`}>
                <Header />
                {/* <React.Suspense fallback={<div className={`loading`}>Loading...</div>}> */}
                <Switch>
                    <Route exact path='/' component={PostList} />
                    <Route path='/post/:id' component={PostDetail} />
                </Switch>
                {/* </React.Suspense> */}
            </div>
        </BrowserRouter>
    )
}

export default App;