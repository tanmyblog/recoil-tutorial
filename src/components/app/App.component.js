import React from 'react';

import { useRecoilValue } from 'recoil';

import './App.style.scss';

import Header from '../header';
import MainContent from '../main-content';

import { WebConfigState } from '../../stores/atoms/WebConfigAtom';

const App = () => {
    const darkMode = useRecoilValue(WebConfigState);
    return (
        <div className={`App ${darkMode ? 'App--dark-mode' : ''}`}>
            <Header />
            <MainContent />
        </div>
    )
}

export default App;