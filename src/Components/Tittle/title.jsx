import React from 'react'
import './title.css'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const Tittle = ({subtitle, title}) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div className={`tittle ${isVisible ? 'animate' : ''}`} ref={ref}>
           <p>{subtitle}</p>
           <h2>{title}</h2>
        </div>
    )
}

export default Tittle