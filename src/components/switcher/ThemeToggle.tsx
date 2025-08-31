import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    const [radioActive, setRadioActive] = useState(false);
    const [radioLightActive, setRadioLightActive] = useState(false);

    // Sync body class
    useEffect(() => {
        document.body.classList.toggle('bg-dark', isDark);
        return () => {
            document.body.classList.remove('bg-dark');
        };
    }, [isDark]);

    const handleDarkClick = () => {
        setRadioActive(prev => !prev);
        setIsDark(prev => !prev);
    };

    const handleLightClick = () => {
        setRadioLightActive(prev => !prev);
        setIsDark(prev => !prev);
    };

    return (
        <>
            <div className="radio-btn" onClick={handleDarkClick}>
                <div className={`radio-inner ${radioActive ? 'active' : ''}`}></div>
            </div>

            <div className="radio-btn-light" onClick={handleLightClick}>
                <div className={`radio-inner-light ${radioLightActive ? 'active' : ''}`}></div>
            </div>
        </>
    );
};

export default ThemeToggle;
