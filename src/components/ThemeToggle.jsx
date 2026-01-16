import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;
