import React from 'react';
import ButtonExample from "../../Components/SkillsBadges";
import skillData from './traduction';
import { useParallax } from "react-scroll-parallax";

export const Skills = () => {

    const parallax = useParallax({
        translateX: ['-100px', '0px'],
        opacity: [0, 1],
        easing: [0, 1.37, 1, .93]
    });

    return (
        <div ref={parallax.ref} className="shadow-sm px-3 py-2 mb-5 bg-body rounded" id="skills">
            <h2>Compétences</h2>
            <div className="skills-container d-flex justify-content-around flex-wrap">
                {skillData.map((item, index) => (
                    <div className="skill-item" key={index}>
                        <ButtonExample Name={item.name} Icon={item.icon} />
                    </div>
                ))}
            </div>
        </div>

    );
};
