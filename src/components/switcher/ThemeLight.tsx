import { useState } from 'react';

const ThemeLight = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(prev => !prev);
        document.body.classList.toggle('bg-dark');
    };

    return (
        <>
            <div className="radio-btn-light" onClick={handleToggle}>
                <div className={`radio-inner-light ${isActive ? 'active' : ''}`}></div>
            </div>
        </>
    );
};

export default ThemeLight;
