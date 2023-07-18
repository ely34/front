import React from "react";
import "./style.css";

const plats = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col">
      <div className="plate">
        <p>riz poulet</p>
        <img src="/./img/riz-poulet.png" alt="" />
      </div>
    </div>
    <div className="col">
      <div className="plate">
        <p>riz poisson </p>
        <img src="/./img/thieb.png" alt="" />
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <div className="plate">
        <p>yassa</p>
        <img src="/./img/yasssa.png" alt="" />
      </div>
    </div>
    <div className="col">
      <div className="plate">
        <p>mafe</p>
        <img src="/./img/mafe.png" alt="" />
      </div>
    </div>
  </div>
</div>

  );
};

export default plats;
