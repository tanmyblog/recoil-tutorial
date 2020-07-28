import React from 'react';

import './Switch.style.scss';

const Switch = (props) => {
    const { label, checked, darkMode, onChange } = props;
    return (
        <div>
            <span className={`label ${darkMode ? 'label--dark-mode' : ''}`}>{label}</span>
            <label className='switch'>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={onChange}
                />
                <span className='slider round'></span>
            </label>
        </div>
    );
}

Switch.defaultProps = {
    label: 'Light',
    checked: false,
    darkMode: false,
    onChange: () => { },
};

export default Switch;