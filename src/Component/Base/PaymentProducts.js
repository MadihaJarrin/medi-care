import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacbook, faFax, faBookReader, faReceipt } from '@fortawesome/free-solid-svg-icons';

import './PaymentProducts.css'

const PaymentProducts = (props) => {
    const { departmentname, img, cost, year, } = props.subject;
    const icon = <FontAwesomeIcon icon={faFax} />
    const icon2 = <FontAwesomeIcon icon={faBookReader} />
    return (
        <div className="details-container">
            <div className="" id='paymentimg'>
                <div className="img-color" >
                    <img src={img} alt="" />
                </div>
                <div className="paymentCardBody">
                    <h4> Name : {departmentname}</h4>
                    {/* <h4>Subject : {props.subject.subject}</h4> */}
                    {/* <p>Year: {year}</p> */}
                    <p>Cost : ${cost}</p>
                    <button
                        onClick={() => props.handleAddToCart(props.subject)}
                        className="purchase-btn">Confirm</button><br />
                    {icon} {icon2}
                    {/* <p id='icon'>
                        {icon} {icon2}
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default PaymentProducts;