import React from "react";
import AboutCard from "./AboutCard";
import Strawberries from "./../img/Strawberries.png";
import Dumpling from "./../img/Dumplings.png";
import Cashew from "./../img/Cashew.png";
import Vegetable from "./../img/Vegetable.png";

const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row text-center pb-5" id="about">
            <h6 className="fw-bold mb-5">About Us</h6>
            <p className="fs-2 fw-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui id dolorum voluptate
              nihil totam mollitia, atque nam quo quidem eius ex sunt quod earum dolore. Voluptates
              officiis consequuntur nisi assumenda?
            </p>
          </div>
          <div className="row">
            <AboutCard img={Strawberries} />
            <AboutCard img={Dumpling} />
            <AboutCard img={Cashew} />
            <AboutCard img={Vegetable} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
