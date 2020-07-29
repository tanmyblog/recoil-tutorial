import React from 'react';
import { Link } from 'react-router-dom';

import { Switch } from '../../common';

import './Header.style.scss';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { WebConfigState } from '../../../stores/atoms/WebConfigAtom';
import { setToggleDarkMode } from '../../../stores/selectors/WebConfigSelector';

const Header = () => {
    const darkMode = useRecoilValue(WebConfigState);
    const toggleChange = useSetRecoilState(setToggleDarkMode);

    return (
        <div className={`header-container ${darkMode ? 'header-container--dark-mode' : ''}`}>
            <div className={`header-box`}>
                <div className={`${darkMode ? 'header-dark-title' : 'header-title'}`}>
                    <h1 className={`${darkMode ? 'Dark-title' : 'Light-title'}`}><Link to={'/'}>Blogpost</Link></h1>
                </div>
                <div className={`header-button`}>
                    <Switch
                        label={`${darkMode ? 'Dark mode' : 'Light mode'}`}
                        checked={darkMode}
                        darkMode={darkMode}
                        onChange={toggleChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;