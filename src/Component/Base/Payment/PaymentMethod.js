import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PaymentProducts from '../PaymentProducts';
import PaymentCart from './PaymentCart';
import './PaymentMethod.css'

const PaymentMethod = ({ teachingCourse }) => {
    const { id, space } = teachingCourse;

    const [subjects, setSubjects] = useState([]);
    const [cart, setCart] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
        fetch('./subjectlist.JSON')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    //add event handler 
    const handleAddToCart = (subject) => {
        // console.log("clicked");
        // console.log(subject.subject);
        const newCart = [...cart, subject];
        setCart(newCart);

        const newName = [...name, subject];
        setName(newName);
        console.log(name);
    }

    return (
        <div className="body">

            <div className="subject-list">
                {
                    subjects.map(subject => <PaymentProducts
                        subject={subject}
                        handleAddToCart={handleAddToCart}
                    ></PaymentProducts>)
                }
            </div>
            <div>
                <PaymentCart cart={cart}
                    name={name}
                ></PaymentCart>
            </div>
        </div>

        // <div className='body'>
        //     <div className='payment'>
        //         <div className="">
        //             <h1>Reason for Choosing us </h1>
        //             <br />

        //             <div className="justify-content-center pt-5 pb-5" id="highlight-section">
        //                 <div>
        //                     <a href="ss"><i class="fas fa-briefcase-medical"></i></a>
        //                     <p style={{ marginTop: '25px' }}>First-aid box</p>
        //                     <h6>Please Pay {space} to get service </h6>
        //                     <NavLink onClick={() => handleAddToCart(props.subject)} type="button" className="btn btn-danger" id="contact-button" to="/payment">Confirm</NavLink>

        //                 </div>
        //                 <div>
        //                     <a href="ss"><i class="fas fa-stethoscope"></i></a>
        //                     <p style={{ marginTop: '25px' }}>stethoscope</p>
        //                     <h6>Please Pay {space} to get service </h6>
        //                     <NavLink type="button" className="btn btn-danger" id="contact-button" to="/payment">Confirm</NavLink>

        //                 </div>
        //                 <div>
        //                     <a href="ss"><i class="fas fa-hospital-user"></i></a>
        //                     {/* <i class="fa-thin fa-house-medical"></i> */}
        //                     <p style={{ marginTop: '25px' }}>Use Hospital</p>
        //                     <h6>Please Pay {space} to get service </h6>
        //                     <NavLink type="button" className="btn btn-danger" id="contact-button" to="/payment">Confirm</NavLink>

        //                 </div>
        //             </div>
        //             <div className="justify-content-center mt-5 pt-5 " id="highlight-section">
        //                 <div>
        //                     <a href="ss"><i class="fas fa-ambulance"></i></a>
        //                     <p style={{ marginTop: '25px' }}>24 hour Ambulance Service</p>
        //                     <h6>Please Pay {space} to get service </h6>
        //                     <NavLink type="button" className="btn btn-danger" id="contact-button" to={`payment`}>Confirm</NavLink>

        //                 </div>
        //                 <div>
        //                     <a href="ss"><i class="fas fa-hand-holding-medical"></i></a>
        //                     <p style={{ marginTop: '25px' }}>Get Excellent Service</p>
        //                     <h6>Please Pay {space} to get service </h6>
        //                     <NavLink type="button" className="btn btn-danger" id="contact-button" to="/payment">Confirm</NavLink>

        //                 </div>
        //                 <div>
        //                     <a href="ss"><i class="fas fa-user-md"></i></a>
        //                     <p style={{ marginTop: '25px' }}>Qualified Doctor</p>
        //                     <h6>Please Pay {space} to get service </h6>
        //                     <NavLink type="button" className="btn btn-danger" id="contact-button" to="/payment">Confirm</NavLink>

        //                 </div>
        //             </div>

        //         </div>

        //     </div>
        //     <div>
        //         <PaymentCart
        //             cart={cart}
        //         ></PaymentCart>
        //     </div>


        // </div>
    );
};

export default PaymentMethod;