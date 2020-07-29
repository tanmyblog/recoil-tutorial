import React from 'react';

import './Layout.style.scss';

const Layout = ({ children }) => {
    return (
        <div className={`Main`}>
            {children}
        </div>
    );
};

export default Layout;