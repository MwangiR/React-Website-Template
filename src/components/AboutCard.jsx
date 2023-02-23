import React from "react";

const AboutCard = (props) => {
  return (
    <>
      <div className="col-md-6 mb-4">
        <div>
          <img src={props.img} alt="" className="img-fluid img-food" />
        </div>
      </div>
    </>
  );
};

export default AboutCard;
