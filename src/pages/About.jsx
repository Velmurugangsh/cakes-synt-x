import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">

        {/* LEFT SIDE — TEXT */}
        <div className="about-text">
          <h1 className="about-title">About SynTx Cakes</h1>

          <p className="about-desc">
            Welcome to <b>SynTx Cakes</b> — where luxury meets sweetness.  
            We craft premium cakes with rich flavors, soft textures, and a touch of elegance.
            Every cake is made with passion, precision, and lots of love.  
            From birthday delights to wedding masterpieces, we bring happiness in every slice.
          </p>
          <br></br>

          <p className="about-desc">
            Our master bakers use only the finest ingredients —  
            <i>Belgian chocolate, fresh fruits, Madagascan vanilla, premium nuts</i>  
            — blended beautifully to create unforgettable experiences.
          </p>
          <br></br>

          <p className="about-desc">
            We believe cakes are not just desserts…  
            they are emotions, celebrations, and memories wrapped in sweetness.
          </p>
          <br></br>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="about-image-wrapper">
          <img
            src="/images/about.webp"
            alt="Luxury Cake"
            className="about-image"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
