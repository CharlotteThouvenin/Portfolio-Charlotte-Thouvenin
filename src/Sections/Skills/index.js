import React from 'react';
import ButtonExample from "../../Components/SkillsBadges";
import skillData from './skills';
import { useParallax } from "react-scroll-parallax";
import traduction from './traduction';
import { useContext } from 'react';
import { LanguageContext } from '../../contextLang';
import { Card } from 'react-bootstrap';

export const Skills = () => {

    const parallax = useParallax({
        translateX: ['-100px', '0px'],
        opacity: [0, 1],
        easing: [0, 1.37, 1, .93]
    });

    const { language } = useContext(LanguageContext);

    return (
        <div ref={parallax.ref} className="shadow-sm px-3 py-4 mb-5 bg-body rounded" id="skills">
            <h2>{traduction[language].title}</h2>
            <div className='row m-2 gy-3'>
                <div className='col-12 col-md-4'>
                    <Card className='m-2 h-100'>
                        <Card.Header>
                            {traduction[language].subtitle1}
                        </Card.Header>
                        <Card.Body className="d-flex flex-row flex-wrap">
                            {skillData.map((item, index) => (
                                <div key={index}>
                                    <ButtonExample Name={item.name} Icon={item.icon} />
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </div>



                <div className='col-12 col-md-4'>
                    <Card className='m-2 h-100'>
                        <Card.Header>
                            {traduction[language].subtitle2}
                        </Card.Header>
                        <Card.Body className='d-flex flex-column justify-content-around h-100'>
                            {traduction[language].pro.map((item, index) => (
                                <div key={index} >
                                    <span>{item}</span>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-md-4'>
                    <Card className='m-2 h-100'>
                        <Card.Header>
                            {traduction[language].subtitle3}
                        </Card.Header>
                        <Card.Body className='d-flex flex-column justify-content-around h-100'>
                            {traduction[language].soft.map((item, index) => (
                                <div key={index}>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </div>
            </div>


        </div>

    );
};
