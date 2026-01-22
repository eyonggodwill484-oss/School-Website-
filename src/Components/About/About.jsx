import React, { useState } from "react";
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const About = () => {
    const [playState, setPlayState] = useState(false);
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div className={`about ${isVisible ? 'animate' : ''}`} ref={ref}>
            <div className="left">
                <img src={about} alt="" className="about-img" />
                <img src={play} alt="" className="play-icon" onClick={() => { setPlayState(true) }} />
            </div>

            <div className="right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders today</h2>
                <p>Embark on a transformative educational journey with
                    our university's comprehensive education programs. Our cutting-edge
                    curriculum is designed to empower students with the knowledge, skills,
                    and experiences needed to excel in the dynamic field of education.</p>

                <p>With a focus on innovation, hands-on learning, and personalized
                    mentorship, our programs prepare aspiring educators to make a meaningful
                    impact in classrooms, schools, and communities.</p>

                <p>Whether you aspire to become a teacher, administrator, counselor,
                    or educational leader, our diverse range of programs offers the perfect
                    pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </div>
    )
}
export default About