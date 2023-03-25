import React from "react";
import {images} from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Conocenos</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image"></img>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu
          proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Saber más
        </button>
      </div>

      <div className="app__aboutus-content_coffee flex__center">
        <img src={images.fallingcoffee} alt="falling coffee" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image"></img>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu
          proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Saber más
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
