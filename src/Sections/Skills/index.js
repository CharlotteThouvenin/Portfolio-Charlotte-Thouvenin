import React from 'react';
import ButtonExample from "../../Components/SkillsBadges";

export const Skills = () => {
    const skillData = [
        { name: "HTML", icon: "fa-brands fa-html5 " },
        { name: "CSS", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Sass", icon: "fa-brands fa-sass" },
        { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
        { name: "Git & GitHub", icon: "fa-brands fa-github" },
    ];

    return (
        <div className="shadow-sm px-3 py-2 mb-5 bg-body rounded" id="skills">
            <h2 >Compétences</h2>
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
