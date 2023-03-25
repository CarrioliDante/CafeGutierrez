import React from "react";
import {images, data} from "../../constants";
import {SubHeading, MenuItem} from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Nuestro menú" />
      <h1 className="headtext__cormorant">Nuestras especialidades</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_coffee flex__center">
        <p className="app__specialMenu-menu_heading">Cafés</p>
        <div className="app__specialMenu_menu_items">
          {data.coffee.map((coffee, index) => (
            <MenuItem
              key={coffee.title + index}
              title={coffee.title}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              price={cocktails.price}
              tags={cocktails.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: "15px"}}>
      <button type="button" className="custom__button">
        Ver más
      </button>
    </div>
  </div>
);
export default SpecialMenu;
