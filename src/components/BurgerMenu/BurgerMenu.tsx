import React, { useState } from 'react';
import s from './BurgerMenu.module.scss';

interface Props {
    onToggle: (isOpen: boolean) => void;
}

const BurgerMenu: React.FC<Props> = ({ onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        onToggle(!isOpen);
    };

    return (
        <button className={`${s.burgerMenu} ${isOpen ? s.open : ''}`} onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default BurgerMenu;