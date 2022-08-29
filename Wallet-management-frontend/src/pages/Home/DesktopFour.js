import React, { useEffect } from "react";
import "./DesktopFour.css";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../../images/DesktopFour-img.png";
import img2 from "../../images/card-img.png";
import img3 from "../../images/./security-img.png";

const DesktopFour = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="container-fluid ">
        <div className="container-fluid">
          <h3 data-aos="fade-up" className="text-white text-center fw-bold">
            With Spara{" "}
            <span className="text-primary"> Wallet, Your Transactions</span> are
            Faster
          </h3>
          <p data-aos="fade-up" className="text-center text-white">
            Simple, quick transactions. Say goodbye to queues. Spara is the
            quickest and
            <br /> easiest method to manage your funds and conduct transactions
            without having
            <br /> to wait in long bank lines.
          </p>

          <img
            data-aos="zoom-in"
            className="imageTransac mb-4"
            src={img1}
            alt="Transaction description"
          />
        </div>

        <div className="container ">
          <h3
            data-aos="fade-up"
            className="text-white text-center fw-bold debit"
          >
            With Spara <span className="text-primary"> Debit, You </span> good
            to go.
          </h3>
          <p data-aos="fade-up" className="text-center text-white">
            You can use your Spara wallet to make purchases of goods, services,
            and
            <br /> worldwide subscriptions using our real debit cards. Utilize
            your Spara card
            <br /> to easily make payments offline or online and to participate
            in our generous
            <br /> rewards program.
          </p>
          <img
            data-aos="zoom-in"
            src={img2}
            alt="ATM card"
            className="imageCard container-fluid"
          />
        </div>
      </div>

      <div className="container-fluid ">
        <div data-aos="fade-up" className="row security-section">
          <div className="col ml-2">
            <img src={img3} alt="security" className="securityimage" />
          </div>
          <div className="col text-white mt-4">
            <h3 className="fw-bold">Security Is Our Priority</h3>
            <p>
              Your Security and Privacy are important to us. contemporary fraud
              detection
            </p>
            <p>
              Strong cryptography is employed to store and encrypt your data. We
              regularly check our systems for security concerns.Your cash is
              secure with us.
            </p>
            <p>
              We adhere to PCI DSS requirements. Your transactions are protected
              and encrypted at all times.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="display-flex-md  m-5 g-0 align-items-center justify-content">
        <div>
          <Row>
            <Col>
              <img src={img3} alt="security" className="img-fluid imgThree " />
            </Col>
            <Col>
              <table cellspacing="15">
                <tr>
                  <td>
                    <strong>
                      <h3>Security Is Our Priority </h3>
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Your Security and Privacy are important to us.
                      contemporary fraud detection
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Strong cryptography is employed to store and encrypt your
                      data. We regularly check our systems for security
                      concerns.Your cash is secure with us.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      We adhere to PCI DSS requirements. Your transactions are
                      protected and encrypted at all times.
                    </p>
                  </td>
                </tr>
              </table>
            </Col>
          </Row>
        </div>
      </div> */}

      {/* <div className="display-flex-md row m-5 g-0 align-items-center justify-content-center  ">
        <div className="col-4 col-lg-4">
          <img src={img3} alt="security" className="img-fluid imgThree" />
        </div>
        <div className="col-6 align-text-left">
          <table cellspacing="15">
            <tr>
              <td>
                <strong>
                  <h3>Security Is Our Priority </h3>
                </strong>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Your Security and Privacy are important to us. contemporary
                  fraud detection
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Strong cryptography is employed to store and encrypt your
                  data. We regularly check our systems for security
                  concerns.Your cash is secure with us.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  We adhere to PCI DSS requirements. Your transactions are
                  protected and encrypted at all times.
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default DesktopFour;
