import Accordion from 'react-bootstrap/Accordion';
import traduction from "./traduction"
import { useContext } from "react"
import { LanguageContext } from "../../contextLang"

function Background() {

    const { language } = useContext(LanguageContext)

    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen className='w-75'>
            {traduction[language].map((item, index) => (
                <div key={index}>
                    <Accordion.Item eventKey={index} className='m-2'>
                        <Accordion.Header className=''>{item.date}<br /> {item.title}</Accordion.Header>
                        <Accordion.Body>
                            <span></span>
                            <span>{item.place}</span>
                            <span>{item.description}</span>

                        </Accordion.Body>
                    </Accordion.Item>
                </div>
            ))}
        </Accordion>
    );
}

export default Background;