import React from 'react';
import "./counter.css"
const Counter = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="counter-up">
          <div className="content">
            <div className="box">
              <div className="icon"><i className="fas fa-user-md"></i></div>
              <div className="counter">50</div>
              <div className="text">Doctors</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-user-injured"></i></div>
              <div className="counter">600</div>
              <div className="text">Patients</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-procedures"></i></div>
              <div className="counter">999</div>
              <div className="text">Cabin</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-award"></i></div>
              <div className="counter">150</div>
              <div className="text">Awards Received</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;