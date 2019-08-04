import React from "react";
import card2 from "../images/43688.jpg";

// About Area section
const AboutArea = () => (
  <main className="bd-masthead my-4" id="content" role="main">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-8 mx-auto col-md-8 order-md-2">
          <p className="about_heading mb-3">ABOUT US</p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
          <p className="mb-4">
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
            rutrum.
          </p>
        </div>
        <div className="col-md-4 order-md-1 text-center text-md-left pr-md-4">
          <img
            class="about_image"
            className="rounded card-img-top"
            src={card2}
            alt="My capsule"
            width="368"
            height="368"
          />
        </div>
      </div>
    </div>
  </main>
);

export default AboutArea;
