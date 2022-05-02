import React from 'react';

const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
        <footer>
            <p><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;