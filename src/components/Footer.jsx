import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light" id="contact">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-4 text-center mb-3">
              <h2 className="fw-light">Company Name</h2>
              <p className="fw-light">123 Lorem, Ipsum</p>
              <p className="fw-light">Lorem, ipsum</p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <h2 className="fw-light">Contact</h2>
              <p className="fw-light">123-456-789</p>
              <p className="fw-light">info@mail.com</p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <h2 className="fw-light">About Us</h2>
              <p className="fw-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga neque odio omnis
                ipsam, minus ullam sit repellat eos et nemo iusto porro ex tempore dolor.
                Voluptatibus officia amet dolorum dolore?
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
