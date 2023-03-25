import React from "react";
import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi";

import {FooterOverlay, Newsletter} from "../../components";
import {images} from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">Juan María Gutiérrez 2637</p>
        <p className="p__opensans">011 3117-4847</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gutierrez} alt="footer_logo" />
        <p className="p__opensans">&quot;Amamos el café.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{marginTop: 15}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario</h1>
        <p className="p__opensans">Lunes-Viernes:</p>
        <p className="p__opensans">08:00 am - 1:00 am</p>
        <p className="p__opensans">Sabados-Domingos:</p>
        <p className="p__opensans">09:00 am - 03:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gutiérrez. Todos los derechos reservados.</p>
    </div>
  </div>
);

export default Footer;
