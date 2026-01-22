import React from "react"
import './Programs.css'
import programs_1 from '../../assets/program-1.png'
import programs_2 from '../../assets/program-2.png'
import programs_3 from '../../assets/program-3.png'
import program1 from '../../assets/program-icon-1.png'
import program2 from '../../assets/program-icon-2.png'
import program3 from '../../assets/program-icon-3.png'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const Programs = ()=>{
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return(
        <div className={`Programs ${isVisible ? 'animate' : ''}`} id="programs" ref={ref}>
<div className="program">
    <img src={programs_1} alt="Students during a lecture"/>
    <div className="caption">
        <img src={program1} alt="Graduation icon"/>
        <p>Graduation Degree Program</p>
    </div>
    
</div>

<div className="program">
    <img src={programs_2} alt="Students working on laptops"/>
    <div className="caption">
        <img src={program2} alt="Master's degree icon"/>
        <p>Master Degree</p>
    </div>
     
</div>

<div className="program">
    <img src={programs_3} alt="A student smiling in the library"/>

    <div className="caption">
        <img src={program3} alt="Post-graduation icon"/>
        <p>Post Graduation</p>
    </div>
    
</div>
        </div>
    )
}

export default Programs