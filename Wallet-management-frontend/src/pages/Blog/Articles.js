import React from "react";
import blog from "./blog.jpg";
import "./Articles.css";


const Articles = () => {
  return (
    <div className="justify-content-center">
      <div className="container-{breakpoint}">
        <div id="conditions">
          <h2 style={{ paddingTop: "10%", paddingBottom: "2%" }}>
            <b>Spara Wallet, Save Smart and Spend less. Reasons!</b>
          </h2>
          <img
            className="img-responsive"
            src={blog}
            style={{
              paddingTop: "1%",
              paddingBottom: "1%",
              marginBottom: "2%",
              height: "300px",
              width: "350px",
            }}
            alt=""
          />
        </div>

        <div id="writeup">
          <h2>1. Mobile Phone Compatibility</h2>
          <p>
            For most tech-savvy Westerners, a smartphone is a computer they take
            with them while on the go, but smartphones are the only personal
            computers that some consumers in developing economies possess. Many
            smartphones can be purchased for less than a desktop, laptop, or
            smart tablet—and their compact size makes them easier to protect
            from theft. Because people in developing economies tend to have less
            disposable income than consumers in developed nations, an affordable
            cell phone with a strong battery and plenty of memory is a popular
            choice for a primary computer in developing areas. Plus, the device
            supports diverse forms of communication and gives people access to
            free apps that help organize and monitor finances, health
            information, personal to-do lists, and more. You get to create an
            account with Spara Wallet.
          </p>
          <h2> 2. High-Level eCommerce Security </h2>
          <p>
            Spara Wallet offers nationally-based eWallet services with standard
            security within and outside the country. With Spara Wallet, you can
            track all your online transactions. Within the past decade, the
            emergence of global eWallet providers that maintain PCI DSS
            compliance — which is the highest set of security standards for
            eCommerce transactions in the world — has made it possible to buy
            from Spara Wallet with more confidence than ever before. It’s hard
            to get excited about making online purchases when there’s a decent
            chance your account information could fall into the wrong hands and
            lead to identity theft. Featuring the latest cyber security
            technology by Spara Wallet, the ironclad IT infrastructure of global
            PCI DSS compliant Spara Wallet can eliminate this scenario.
            Consequently, the Spara Wallet Team has done a great deal to make
            eWallet services exceptionally popular in developing economies. We
            have set security standards for domestic eWallet services in
            countries whose economies are gaining traction in the global
            marketplace.
          </p>
          <h2> 3. Access to the Global Marketplace </h2>
          <p>
            Nigerians often use eWallet services to buy things they can’t find
            in their home city, but people in developing economies frequently
            use the services to purchase goods that can’t be found in their
            entire country. Say you live in Kenya, and you need to purchase
            something that isn’t distributed in your country. You can log into
            your smartphone, visit a Spara Wallet website, and create an account
            and pay bills at the tip of your fingers. The same goes for any
            number of other products whose manufacturers don’t have contracts
            with vendors in challenged economies. Receiving what you order
            online can also be a problem in Nigeria, but step one for
            participating in global eCommerce has been established: the
            availability of global Spara Wallet services. As this nation
            continues to develop, Spara Wallet will continue to improve so as to
            meet the demands of its customers.
          </p>
        </div>
      </div>{" "}
      
    </div>
  );
};

export default Articles;
