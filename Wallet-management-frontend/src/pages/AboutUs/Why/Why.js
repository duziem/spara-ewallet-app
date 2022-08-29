import React from 'react'
import './Why.css'
import cardTwo from '../Images/Coins.jpg'
import pay from "../Images/pay.jpg";

const Why = () => {
  return (
    <section className="container text-white mb-5 mt-5" id='container'>
      <div className="">
        <h1 className='mt-5'>Why We Do It</h1>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="cardfoot">
              <div class="card" style={{ width: "28rem" }}>
                <img src={pay} className="card-img-top" alt="card_img1" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Spara is a one-stop mobile-based platform for payment,
                    transportation, food & grocery delivery, and other important
                    services in your everyday life. Millions of users rely on
                    Spara everyday to send and receive money, pay bills, and
                    order food and groceries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mt-3">
            <div className="cardfoot">
              <div class="card" style={{ width: "28rem" }}>
                <img src={cardTwo} className="card-img-top" alt="card_img1" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    With a passionate team, sophisticated mobile platform, and a
                    fast-growing community of users, Spara is a making financial
                    services more efficient for millions of users and it starts
                    with the ability to pay and have access to the right
                    opportunities at the right time
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

export default Why