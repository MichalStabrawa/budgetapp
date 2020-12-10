import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const StartSection = (props) => {
  return (
    <section className="get-start">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>HOW IT WORKS</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <figure className="img-wrapper">
              <img src={icon1} alt="" />
            </figure>
            <h3 className="card-title">Lorem ipsum</h3>
          </div>
          <div className="col">
            <figure className="img-wrapper">
              <img src={icon2} alt="" />
            </figure>
            <h3 className="card-title">Lorem ipsum</h3>
          </div>
          <div className="col">
            <figure className="img-wrapper">
              <img src={icon3} alt="" />
            </figure>
            <h3 className="card-title">Lorem ipsum</h3>
          </div>
        </div>
        <div className="row">
          <div className="col get-start__btn">
            <button
              type="button"
              className={
                props.isActive === false ? "btn btn-secondary btn-lg" : "hide"
              }
              onClick={props.click}
            >
              GET STARTETD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartSection;
