import React from 'react'
import './Who.css'
import cardOne from '../Images/Online.jpg'
import cardTwo from '../Images/Bitcoin.jpg'

const Who = () => {
  return (
    <section className="container text-white mb-5 mt-5">
      <div className="">
        <h1 className="mt-5">Who we are</h1>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="cardfoot">
              <div className="card" style={{ width: "28rem" }}>
                <img src={cardOne} className="card-img-top" alt="card_img1" />
                <div className="card-body">
                
                  <p className="card-text">
                    We are more than a payment company. We believe everyone
                    should be able to enjoy financial and social inclusion,
                    without regard for physical borders, boundaries, or even
                    social status.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="cardfoot">
              <div className="card" style={{ width: "28rem" }}>
                <img src={cardTwo} className="card-img-top" alt="card_img1" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Over 60% of people in Africa remain unbanked and can't
                    access the most basic financial services to invest in their
                    education and businesses, which limits their full potential.
                    Nobody should be denied access to participate in the world
                    economy because of their circumstances or background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who