import * as React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import './Contact.css'
import envelope from "./icons/Envelope.svg";
import basketball from "./icons/Basketball.svg";
import phone from "./icons/Phone.svg";
import mapPin from "./icons/MapPin.svg";
import bagIcon from "./icons/bag-icon.svg";
import tagIcon from "./icons/tag-icon.svg"; 
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hrivyxw",
        "template_313ju8w",
        form.current,
        "7Y8nNVCResI2FSs3b"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <Header />

      <div className="container-contact-fluid p-4">
        <div className="page_header text-center  text-white py-3">
          <h2>Contact Us</h2>
          <p>
            SparaWallet is a payment platform developed and managed by
            SparaWallet Payments Ltd - a Financial Technology Company. Get in
            touch with our sales or support team.
          </p>
        </div>

        <div className="threesection d-flex flex-column gap-5">
          <div className="map_and_contact_form row">
            {/* map div */}
            <div className="googlemap col-md-6 col-12 position-relative p-0">
              <ul className="map-float position-absolute top-0 end-0 d-flex flex-column text-white p-4 gap-3">
                <li className="row">
                  <div className="map-control-item-icon col-2">
                    <img src={mapPin} alt="" />
                  </div>
                  <a
                    className="map-control-item-text text-white text-decoration-none col-10"
                    href="https://maps.google.com?q=lagos"
                  >
                    Lagos State, Nigeria
                  </a>
                </li>
                <li className="row">
                  <span className="map-control-item-icon col-2">
                    <img src={phone} alt="" />
                  </span>
                  <a
                    className="map-control-item-text text-white text-decoration-none col-10"
                    href="tel://+2347062883959"
                  >
                    07062883959
                  </a>
                </li>
                <li className="row">
                  <span className="map-control-item-icon col-2">
                    <img src={envelope} alt="" />
                  </span>
                  <a
                    className="map-control-item-text text-white text-decoration-none col-10"
                    href="mailto://sparawallet@gmail.com"
                  >
                    sparawallet@gmail.com
                  </a>
                </li>
                <li className="row">
                  <span className="map-control-item-icon col-2">
                    <img src={basketball} alt="" />
                  </span>
                  <a
                    className="map-control-item-text text-white text-decoration-none col-10"
                    href="google.com"
                  >
                    Visit SparaWallet Website
                  </a>
                </li>
              </ul>

              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=PWC%20lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                // style={{ width: "100%" }}
              ></iframe>
            </div>

            <form
              className="contact_form col-md-6 col-12 row gap-2 ms-auto"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="col-12 ps-0 pt-3">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
              />
              <label className="col-12 ps-0 pt-3">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
              />
              <label className="col-12 ps-0 pt-3">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave A Message Here"
                style={{ height: 170 }}
                defaultValue={""}
              />{" "}
              <br></br>
              <button className="btn1" value="send" type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="additional_content text-blue-900 row p-2 gap-2">
            <h2 className="additiona_content_header text-center col-12 my-5">
              Additional contact information
            </h2>

            <div className="sales_contact col-md-6 col-12 row border p-3 shadow">
              <div className="contact_img d-grid justify-content-center align-content-center col-3">
                <img className="" src={bagIcon} alt="" />
              </div>
              <div className="contact_body row col-9">
                <h3 className="col-12">Contact Sales Team</h3>
                <div className="contact_text col-12">
                  Looking for a custom quote? need to tell us more about your
                  project? or want a demonstration? email us at
                </div>
                <a
                  href="mailto://someone@domain.com"
                  className="text-blue-900 text-decoration-none fw-bold"
                >
                  sparawallet@gmail.com
                </a>
              </div>
            </div>

            <div className="sales_contact col-md-6 col-12 row border ms-auto p-3 shadow">
              <div className="contact_img d-grid justify-content-center align-content-center col-3">
                <img className="" src={tagIcon} alt="" />
              </div>
              <div className="contact_body row col-9">
                <h3 className="col-12">Contact Technical Team</h3>
                <div className="contact_text col-12">
                  Any question about how to integrate your product?. Dont fret,
                  our geek team is ready for you at
                </div>
                <a
                  href=""
                  className="text-blue-900 text-decoration-none fw-bold"
                >
                  sparawallet@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
