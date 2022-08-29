import React from 'react'
import './Footer.css'
import imagelogo from './image-logo.svg'

const Footer = () => {
  return (

    <div className='foot' >
      <footer className="foot text-center text-lg-start bg-white text-muted">
        {/* Section: Links  */}
        <section className="footer-section mx-auto">
          <div className="footer-container-fluid text-center text-md-start text-white">
            {/* Grid row */}
            <div className="container row mt-5 mx-auto">
              {/* Grid column */}
              <div className="divone text-white col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <img src={imagelogo} alt=''/>
                  <i className="fas fa-gem me-3 text-white" />
                
                </h6>
                <p>
                  5B Water Corporation Road Landmark Towers Victoria Island,
                  Eti-Osa 101233, Lagos
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 text-end">Useful Links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    AboutUs
                  </a>
                </p>
                <p>
                  <a href="#contact" className="text-reset">
                  ContactUs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Services
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{marginTop:'45px'}}>
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4"></h6>
                <p>
                  <a href="#!" className="text-reset">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                  
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 text-end ">Socials Media Handles</h6>
                <p>
                  <i className="fa fa-facebook me-3 text-grayish"/> 
                  <a className='fa' href="https://www.facebook.com/sparawallet" > facebook
                  </a>
                </p>
                <p>
                  <i className="fa fa-envelope me-3 text-grayish" />
                  <a href='mail_to:sparawallet@gmail.com'>
                  sparawallet.com</a>
                </p>
                <p>
                  <i className="fa fa-phone me-3 text-grayish" /> 
                  <a href='tel: +2349068255988'> + 234 9068255988</a>
                </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 " style={{marginTop:'45px'}}>
                <p>
                  <i className="fa fa-instagram me-3 text-grayish" /> 
                  <a href='https://www.instagram.com/sparawallet' >Instagram</a>
                </p>
                <p>
                  <i className="fa fa-linkedin me-3 text-grayish" /> 
                  <a href='https://www.linkedin.com/in/spara-wallet' >Linkedin</a>
                </p>
                <p>
                  <i className="fa fa-github me-3 text-grayish" /> 
                  <a href='https://www.github.com/sparawallet' >Github</a>
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="foot text-white text-center p-4"
          
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://sparawallet.com/">
            sparawallet.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
    
      // <footer className="foot text-center text-lg-start text-muted ">
      //   {/* Section: Links  */}
      //   <section className="footer-section mx-auto">
      //     <div className="footer-container-fluid text-center text-md-start text-white">
      //       {/* Grid row */}
      //       <div className="row mt-5">
      //         {/* Grid column */}
      //         <div className="divone text-white col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      //           {/* Content */}
      //           <h6 className="text-uppercase fw-bold mb-4">
      //             <img src={imagelogo} alt=''/>
      //             <i className="fas fa-gem me-3 text-white" />
                
      //           </h6>
      //           <p>
      //             5B Water Corporation Road Landmark Towers Victoria Island,
      //             Eti-Osa 101233, Lagos
      //           </p>
      //         </div>
      //         {/* Grid column */}
      //         {/* Grid column */}
      //         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      //           {/* Links */}
      //           <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
      //           <p>
      //             <a href="#!" className="text-reset">
      //               Home
      //             </a>
      //           </p>
      //           <p>
      //             <a href="#!" className="text-reset">
      //               AboutUs
      //             </a>
      //           </p>
      //           <p>
      //             <a href="#contact" className="text-reset">
      //             ContactUs
      //             </a>
      //           </p>
      //           <p>
      //             <a href="#!" className="text-reset">
      //               Services
      //             </a>
      //           </p>
      //         </div>
      //         {/* Grid column */}
      //         {/* Grid column */}
      //         <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      //           {/* Links */}
      //           <h6 className="text-uppercase fw-bold mb-4"></h6>
      //           <p>
      //             <a href="#!" className="text-reset">
      //               Blog
      //             </a>
      //           </p>
      //           <p>
      //             <a href="#!" className="text-reset">
      //               FAQs
      //             </a>
      //           </p>
      //           <p>
      //             <a href="#!" className="text-reset">
                    
      //             </a>
      //           </p>
      //           <p>
      //             <a href="#!" className="text-reset">
                  
      //             </a>
      //           </p>
      //         </div>
      //         {/* Grid column */}
      //         {/* Grid column */}
      //         <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      //           {/* Links */}
      //           <h6 className="text-uppercase fw-bold mb-4">Socials</h6>
      //           <p>
      //             <i className="fas fa-home me-3 text-grayish" /> 
      //           </p>
      //           <p>
      //             <i className="fas fa-envelope me-3 text-grayish" />
      //             sparawallet.com
      //           </p>
      //           <p>
      //             <i className="fas fa-phone me-3 text-grayish" /> + 234 9068255988
      //           </p>
      //           <p>
      //             <i className="fas fa-print me-3 text-grayish" /> 
      //           </p>
      //         </div>
      //         {/* Grid column */}
      //       </div>
      //       {/* Grid row */}
      //     </div>
      //   </section>
      //   {/* Section: Links  */}
      //   {/* Copyright */}
      //   <div
      //     className="text-center p-4"
      //     style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      //   >
      //     © 2022 Copyright:
      //     <a className="text-reset fw-bold" href="sparawallet.com/">
      //       sparawallet.com
      //     </a>
      //   </div>
      //   {/* Copyright */}
      // </footer>
     
    
  );
}

export default Footer