import { useContext } from "react";
import { LanguageContext } from "../../contextLang";
import './style.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SwitchLang() {
    const { switchLanguage } = useContext(LanguageContext);

    // Modify handleChange to use the correct eventKey parameter
    const handleChange = (eventKey) => {
        switchLanguage(eventKey);
    };

    return (
        <div className="select p-2">
            <Dropdown drop="up" onSelect={handleChange}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Langue
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="fr">Français</Dropdown.Item>
                    <Dropdown.Item eventKey="en">English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
