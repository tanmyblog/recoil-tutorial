import React from 'react';

const Progress = () => (<div style={cStyle}>Loading ... </div>);

const cStyle = {
    flex: 1,
    width: '100%',
    height: 'calc(100% - 61px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden auto',
}

export default Progress;