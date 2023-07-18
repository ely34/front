import React from 'react';

const boissons = () => {
    return (
      <div className="container">
      <div className="row">
        <div className="col">
          <div className="plate">
            <p>jus de bissap</p>
            <img src="/./img/bissap.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="plate">
            <p>jus de gingembre</p>
            <img src="/./img/ginger.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="plate">
            <p>jus de tamarin </p>
            <img src="/./img/tamarin.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="plate">
            <p>jus de bouye</p>
            <img src="/./img/bouye.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default boissons;