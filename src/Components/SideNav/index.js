import './style.scss';
import { useState, useEffect } from 'react';

export function SideNav() {
    const [isVisible, setIsVisible] = useState(false);

    // Fonction pour détecter le défilement vers le bas et afficher le bouton
    const toggleVisibility = () => {
        if (window.pageYOffset > 190) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        isVisible && (
            <div className="sidenav">
                <div className="sidenav__item">
                    <span>About</span>
                    <i className="fa-solid fa-address-card"></i>

                </div>
                <div className="sidenav__item">
                    <span>Skills</span>
                    <i className="fa-solid fa-code"></i>

                </div>
                <div className="sidenav__item">
                    <span>Works</span>
                    <i className="fa-solid fa-briefcase"></i>

                </div>
                <div className="sidenav__item">
                    <span>Contact</span>
                    <i className="fa-solid fa-message"></i>

                </div>
            </div>
        ));
}
