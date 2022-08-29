import React from 'react'
import './Service.css'
import pix from './pix.jpg'
import pix1 from './pix1.jpg'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Services = () =>  {
  return (
    <>
      <Header />
      <div className="justify-content-center">
        <div className="container-{breakpoint}">
          <div className="wrapped p-3  text-center">
            <h1 style={{ color: "white" }}>OUR SERVICES</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center p-3">
              <div className="col-lg-3  col-sm-2">
                <div
                  className="card "
                  style={{ width: "23rem", height: "253px" }}
                >
                  <div className="d-flex">
                    <img
                      src={icon4}
                      className="card-img-left"
                      style={{ width: "50px", height: "50px" }}
                      alt="..."
                    />
                    <div>
                      <h5 className="card-title p-3">Send Money</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Spara provides a convenient means for you to transfer
                      money to your friends and family.
                    </p>
                  </div>
                  <div className="card-footer p-3"></div>
                </div>
              </div>

              <div className="col-lg-3">
                <div
                  className="card"
                  style={{ width: "23rem", height: "253px" }}
                >
                  <div className="d-flex">
                    <img
                      src={icon2}
                      className="card-img-top"
                      style={{ width: "50px", height: "50px" }}
                      alt="..."
                    />
                    <div>
                      <h5 className="card-title p-3">Deposit Money</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Your deposit is easy, stress-free, and simple with Spara.
                    </p>
                  </div>
                  <div className="card-footer p-3"></div>
                </div>
              </div>

              <div className="col-lg-3">
                <div
                  className="card h-100"
                  style={{ width: "23rem", height: "253px" }}
                >
                  <div className="d-flex">
                    <img
                      src={icon3}
                      className="card-img-top "
                      style={{ width: "50px", height: "50px" }}
                      alt="..."
                    />
                    <div>
                      <h5 className="card-title p-3">Bill payment</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      One of the greatest platforms for paying bills is offered
                      by Spara, which includes power, TV subscriptions (GOtv,
                      DSTV,and Startimes),cheerful internet subscriptions, data
                      subscriptions, and more.
                    </p>
                  </div>
                  <div className="card-footer p-3"></div>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center ">
              <div className="col-lg-3">
                <div
                  className="card"
                  style={{ width: "23rem", height: "253px" }}
                >
                  <div className="d-flex">
                    <img
                      src={icon1}
                      className="card-img-top"
                      style={{ width: "50px", height: "50px" }}
                      alt="..."
                    />
                    <div>
                      <h5 className="card-title p-3">Account Openning</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Customers get their account numbers immediately it is
                      opened.
                    </p>
                  </div>
                  <div className="card-footer p-3"></div>
                </div>
              </div>

              <div className="col-lg-3">
                <div
                  className="card"
                  style={{ width: "23rem", height: "253px" }}
                >
                  <div className="d-flex">
                    <img
                      src={icon4}
                      className="card-img-top"
                      style={{ width: "50px", height: "50px" }}
                      alt="..."
                    />
                    <div>
                      <h5 className="card-title p-3">Get Statement</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      You can get your account and all statement regarding your
                      profile.
                    </p>
                  </div>
                  <div className="card-footer p-3"></div>
                </div>
              </div>
            </div>
          </div>

          <section className="frametwo ">
            <p>...with SPARA</p>
            <div className="container ">
              <div className="d-md-flex justify-content-center">
                <div className="">
                  <p className="para">
                    We provid
                    <b>
                      e you with <br />
                    </b>
                    everything <b>you need to</b>
                    <br /> grow your business
                  </p>
                </div>
                <img
                  className=""
                  src={pix}
                  style={{ width: "300px", height: "300px" }}
                  alt=""
                />
              </div>
            </div>
          </section>

          <section className="framethree">
            <h1 style={{ marginTop: "5%", marginBottom: "2%" }}>
              REAL TIME SUPPORT
            </h1>
            <div className="container">
              <div className="d-md-flex justify-content-evenly d-sm-flex">
                <img
                  className="img-responsive"
                  src={pix1}
                  style={{ width: "300px", height: "300px" }}
                  alt=""
                />
                <div>
                  <p className="para">
                    We have created a support
                    <br /> system so you may talk to us
                    <br /> about any problems you are
                    <br /> having because we understand
                    <br /> how important your business is
                    <br /> to you.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services
