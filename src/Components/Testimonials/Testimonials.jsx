import React, { useRef } from "react"
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

    return (
        <div className="Testimonials" id="testimonials">
            <img src={next} alt="" className="next-btn" onClick={slideForward} />
            <img src={back} alt="" className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Godwill Eyong</h3>
                                    <span>University of Buea</span>
                                </div>
                            </div>
                            <p>"The University has a very beautiful environment.
                                The lecturers are very friendly and helpful. I am very
                                happy to be a part of this great institution."</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Suzita Arrah</h3>
                                    <span>University of Buea</span>
                                </div>
                            </div>
                            <p>"The University has a very beautiful environment.
                                The lecturers are very friendly and helpful. I am very
                                happy to be a part of this great institution."</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Melina Dione</h3>
                                    <span>University of Buea</span>
                                </div>
                            </div>
                            <p>"The University has a very beautiful environment.
                                The lecturers are very friendly and helpful. I am very
                                happy to be a part of this great institution."</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Akame Favour</h3>
                                    <span>University of Buea</span>
                                </div>
                            </div>
                            <p>"The University has a very beautiful environment.
                                The lecturers are very friendly and helpful. I am very
                                happy to be a part of this great institution."</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>AyukNgang Becks</h3>
                                    <span>University of Bamenda</span>
                                </div>
                            </div>
                            <p>"The University has a very beautiful environment.
                                The lecturers are very friendly and helpful. I am very
                                happy to be a part of this great institution."</p>
                        </div>
                    </li>



                </ul>
            </div>
        </div>
    )
}

export default Testimonials

