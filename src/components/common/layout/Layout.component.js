import React from 'react';

import './Layout.style.scss';
import { useRecoilValue } from 'recoil';
import { WebConfigState } from '../../../stores/atoms/WebConfigAtom';


const Layout = ({ children }) => {
    const darkMode = useRecoilValue(WebConfigState);

    return (
        <div className={`Main ${darkMode ? 'Main--dark-mode' : ''}`}>
            {children}
        </div>
    );
};

export default Layout;