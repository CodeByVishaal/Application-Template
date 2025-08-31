import { useState } from 'react';

const ThemeDark = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(prev => !prev);

        // Toggle a class on the <body> element
        document.body.classList.toggle('bg-dark');
    };

    return (
        <>
            <div className="radio-btn" onClick={handleToggle}>
                <div className={`radio-inner ${isActive ? 'active' : ''}`}></div>
            </div>
        </>
    );
};

export default ThemeDark;
