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
              <div className="counter">30</div>
              <div className="text">Doctor</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-user-injured"></i></div>
              <div className="counter">508</div>
              <div className="text">Patients</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-procedures"></i></div>
              <div className="counter">1000</div>
              <div className="text">Rooms</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-award"></i></div>
              <div className="counter">120</div>
              <div className="text">Awards Received</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
