import React from 'react';

import { Switch } from '../common';

import './Header.style.scss';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { WebConfigState } from '../../stores/atoms/WebConfigAtom';
import { setToggleDarkMode } from '../../stores/selectors/WebConfigSelector';

const Header = () => {
    const darkMode = useRecoilValue(WebConfigState);
    const toggleChange = useSetRecoilState(setToggleDarkMode);

    return (
        <div className={`header-container ${darkMode ? 'header-container--dark-mode' : ''}`}>
            <div className={`header-box`}>
                <div className={`${darkMode ? 'header-dark-title' : 'header-title'}`}>
                    <span>Blogpost</span>
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