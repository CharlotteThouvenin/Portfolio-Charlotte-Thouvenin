
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


export const UpButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
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
        <div>
            {isVisible && (
                <Button variant="secondary" onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                    <i className="fa-solid fa-circle-up"></i>
                </Button>
            )}
        </div>
    );

};




