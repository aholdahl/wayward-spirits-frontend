import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Allyson Hammerlund <span>{currentYear}</span> | CC A SA</p>
        </footer>
    )
}