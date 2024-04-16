
import { useParallax } from "react-scroll-parallax";

export const ParallaxTitle = ({ title }) => {
    const parallax = useParallax({
        translateX: ['-100px', '20px'],
        easing: [0, 1.37, 1, .93]
    });

    return (
        <div className="">
            <div ref={parallax.ref}>
                <h2>{title}</h2>
            </div>
        </div>

    );
};
