import React from "react";
import card1 from "../images/43690.jpg";
import card2 from "../images/43688.jpg";
import card3 from "../images/43698.jpg";

const CardArea = () => (
  <div className="container py-5 my-5">
    <div className="carou-left">
      <a
        data-slide="prev"
        href="#multi-item-example"
        className="left carousel-control d-none d-lg-block"
      >
        <svg
          width="17"
          height="32"
          viewBox="0 0 17 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.643532 17.5205L12.7419 31.2921C13.7716 32.236 14.7798 32.236 15.7665 31.2921C16.7533 30.3483 16.7318 29.3615 15.7022 28.3319L4.76214 15.976L15.7022 3.74892C16.7318 2.71926 16.7533 1.71108 15.7665 0.724325C14.7798 -0.262435 13.7716 -0.240986 12.7419 0.788675L0.643532 14.5603C0.214509 14.9893 0 15.4827 0 16.0404C0 16.5981 0.214509 17.0915 0.643532 17.5205Z"
            fill="#4A90E2"
          />
        </svg>
      </a>
    </div>

    <div class="carou-right">
      <a
        data-slide="next"
        href="#multi-item-example"
        className="right carousel-control d-none d-lg-block"
      >
        <svg
          width="17"
          height="32"
          viewBox="0 0 17 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.8472 17.5205L3.74878 31.2921C2.71912 32.236 1.71094 32.236 0.724183 31.2921C-0.262577 30.3483 -0.241127 29.3615 0.788532 28.3319L11.7286 15.976L0.788532 3.74892C-0.241127 2.71926 -0.262577 1.71108 0.724183 0.724325C1.71094 -0.262435 2.71912 -0.240986 3.74878 0.788675L15.8472 14.5603C16.2762 14.9893 16.4907 15.4827 16.4907 16.0404C16.4907 16.5981 16.2762 17.0915 15.8472 17.5205Z"
            fill="#4A90E2"
          />
        </svg>
      </a>
    </div>
    <div
      id="multi-item-example"
      className="carousel slide carousel-multi-item py-5"
      data-ride="carousel"
    >
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={card1}
                  alt="International Space Station"
                />
                <div className="card-body">
                  <h4 className="card-title">International Space Station</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur luctus aliquet sapien….
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={card2} alt="My capsule" />
                <div className="card-body">
                  <h4 className="card-title">My capsule</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur luctus aliquet sapien….
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={card3} alt="My moon" />
                <div className="card-body">
                  <h4 className="card-title">My moon</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur luctus aliquet sapien….
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={card1}
                  alt="International Space Station"
                />
                <div className="card-body">
                  <h4 className="card-title">International Space Station</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur luctus aliquet sapien….
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={card2} alt="My capsule" />
                <div className="card-body">
                  <h4 className="card-title">My capsule</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur luctus aliquet sapien….
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={card3} alt="" />
                <div className="card-body">
                  <h4 className="card-title">My moon</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur luctus aliquet sapien….
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={card1}
                  alt="International Space Station"
                />
                <div className="card-body">
                  <h4 className="card-title">International Space Station</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur luctus aliquet sapien….
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={card2} alt="My capsule" />
                <div className="card-body">
                  <h4 className="card-title">My capsule</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur luctus aliquet sapien….
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={card3} alt="My moon" />
                <div className="card-body">
                  <h4 className="card-title">My moon</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur luctus aliquet sapien….
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carou-indicator">
      <ol className="carousel-indicators">
        <li
          data-target="#multi-item-example"
          data-slide-to="0"
          className=" active d-lg-none"
        />
        <li
          data-target="#multi-item-example"
          className="d-lg-none"
          data-slide-to="1"
        />
        <li
          data-target="#multi-item-example"
          className="d-lg-none"
          data-slide-to="2"
        />
        <li
          data-target="#multi-item-example"
          className="d-lg-none"
          data-slide-to="1"
        />
        <li
          data-target="#multi-item-example"
          className="d-lg-none"
          data-slide-to="2"
        />
      </ol>
    </div>
  </div>
);

export default CardArea;
