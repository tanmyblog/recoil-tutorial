import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.style.scss';

import PostList from '../post-list';
import PostDetail from '../post-detail';
import Header from '../common/header';

const App = () => {
    return (
        <BrowserRouter>
            <div className={'App'}>
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