import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Suscribite a nuestro Newsletter</h1>
      <p className="p__opensans">Y no te pierdas ninguna promocion!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Ingresa tu correo electrónico" />
      <button type="button" className="custom__button">
        Suscribirse
      </button>
    </div>
  </div>
);

export default Newsletter;
