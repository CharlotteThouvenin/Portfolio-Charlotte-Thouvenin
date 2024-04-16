import { useContext } from "react";
import { LanguageContext } from "../../contextLang";

import Dropdown from 'react-bootstrap/Dropdown';

export default function SwitchLang() {
    const { language, switchLanguage } = useContext(LanguageContext);
    const languageTitle = {
        en: {
            title: "Language"
        },
        fr: {
            title: "Langue"
        }
    }
    const handleChange = (eventKey) => {
        switchLanguage(eventKey);
    };

    return (
        <div className="select p-2">
            <Dropdown onSelect={handleChange}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {languageTitle[language].title}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="fr">Français</Dropdown.Item>
                    <Dropdown.Item eventKey="en">English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
