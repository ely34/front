import React from 'react';
import  './style.css';
const desserts = () => {
    return (
      <div className="container">
      <div className="row">
        <div className="col">
          <div className="plate">
            <p>thiakry</p>
            <img src="/./img/thiakry.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="plate">
            <p>ngalakh</p>
            <img src="/./img/ngalakh.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="plate">
            <p>pastel</p>
            <img src="/./img/pastel.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="plate">
            <p>beignet</p>
            <img src="/./img/beignet.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default desserts;