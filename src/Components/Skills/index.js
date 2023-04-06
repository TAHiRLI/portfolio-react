/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { TagCloud } from "@frank-mayer/react-tag-cloud";

function Skills() {
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        setIsSmallScreen(mediaQuery.matches);

        const handleMediaQueryChange = (e) => setIsSmallScreen(e.matches);
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }, []);

    return (
        <div id='skills-section' className='row g-0'>
            <div className="about-me col-lg-6 p-5">
                <h1>About Me</h1>
              
                <p>
                    As a former professional football player turned web developer, I have a unique perspective on the world of technology. After sustaining an injury that ended my career on the field, I turned to coding and discovered a new passion for building things with my mind instead of my body.
                    <br />
                    <br />
                    I started by tinkering with Arduino projects, and eventually decided to pursue a more formal education in full-stack programming at Code Academy. I graduated with high honors, and immediately began putting my skills to use on real-world projects.
                    <br />
                    <br />
                    Overall, I believe that my background in sports has given me a strong work ethic and a competitive spirit, while my technical skills allow me to create solutions that are efficient, effective, and user-friendly. I'm excited to continue growing as a developer and exploring new ways to make a positive impact through technology.

                </p>
            </div>

            <div className=" col-lg-6 p-0 globe-container">

                <TagCloud className='d-sm-block'
                    options={(w) => ({
                        radius: Math.min(isSmallScreen?300:400, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: "fast",
                        containerClass: "globe"

                    })}
                    
                    onClick={(tag, ev) => console.log(tag)}
                    onClickOptions={{ passive: true }}
                >
                    {[
                        "HTML",
                        "CSS",
                        "SCSS",
                        "JavaScript",
                        "jQuery",
                        "React js",
                        "Bootstrap",
                        ".Net Core 3.1",
                        ".Net Core 6.0",
                        "Ms SQL",
                        ".Net Web API",
                        ".Net MVC",

                    ]}
                </TagCloud>
            </div>
        </div>
    );
}

export default Skills;