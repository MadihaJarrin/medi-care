import React from 'react';
import './PaymentCart.css'

const PaymentCart = (props) => {
    const { cart, name } = props;

    let total = 0;
    for (const subject of cart) {
        total += subject.cost;
    }

    return (
        <div className="cart-container">
            <h3 >Payment History </h3>
            <h4> Added:{props.cart.length}</h4>
            <h4>Total Cost : {total} </h4>
            {
                name.map(data => <h6> Selected Service: {data.subject}</h6>)
            }
        </div>
    );
};

export default PaymentCart;