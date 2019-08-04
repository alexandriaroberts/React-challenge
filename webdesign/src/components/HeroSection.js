import React from "react";

const HeroSection = () => (
  <div className="jumbotron">
    <div className="row-5 px-lg-5 ml-md-5 col-md-6 py-5">
      <h1 className="display-1 pt-5 font-weight-bold">SPACE.</h1>
      <p className="lead py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        molestie elit at lacus…
      </p>
      <div className="lead py-3 my-4">
        <button type="button" className="btn px-5 btn-primary btn-lg">
          click
        </button>
      </div>
    </div>
    <div className="row trend-content">
      <div className="col-sm-3 d-none d-lg-block">
        <div className="card-body card-body-decoration text-right">
          <h4 className="card-title">Trending</h4>
          <h4 className="card-title text-decoration">Today</h4>
        </div>
      </div>
      <div className="col-sm-3 d-none d-lg-block">
        <div className="card-body card-body-decoration">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget
            dolor.
          </p>
        </div>
      </div>
      <div className="col-sm-3 d-none d-lg-block">
        <div className="card-body card-body-decoration">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget
            dolor.
          </p>
        </div>
      </div>
      <div className="col-sm-3 d-none d-lg-block">
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget
            dolor.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
