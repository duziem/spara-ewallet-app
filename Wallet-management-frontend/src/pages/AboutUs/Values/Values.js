import React from 'react'
import './Values.css'
import en from '../Images/ve.svg'
import di from '../Images/vdd.svg'
import co from '../Images/vii.svg'
import inn from '../Images/vcc.svg'
const Values = () => {
    return (
      <div
        style={{ backgroundColor: "#161B55" }}
        className=" justify-content-center align-items-center pt-5 pb-5"
      >
        <section className="container text-white">
          <div className="row justify-content-center align-items-center">
            <h2 className="text-center pb-3">Our Values</h2>
            <p className="text-center pb-5 vap">
              When you combine human excellence, expertise and technology, this
              is what you get.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <img src={en} alt="Entrepreneurship " className="center" />
              <h3 className="va">Entrepreneurship</h3>
              <p>
                Ability to identify problems, and collaboratively solve them to
                create opportunities for everyone.
              </p>
            </div>
            <div className="col-lg-3">
              <img src={di} alt="Diversity" className="center" />
              <h3 className="va">Diversity</h3>
              <p>
                Ability to identify problems, and collaboratively solve them to
                create opportunities for everyone.
              </p>
            </div>{" "}
            <div className="col-lg-3">
              <img src={inn} alt="Innovation" className="center" />
              <h3 className="va">Innovation</h3>
              <p>
                Ability to identify problems, and collaboratively solve them to
                create opportunities for everyone.
              </p>
            </div>{" "}
            <div className="col-lg-3">
              <img src={inn} alt="Community" className="center" />
              <h3 className="va">Community</h3>
              <p>
                Ability to identify problems, and collaboratively solve them to
                create opportunities for everyone.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Values