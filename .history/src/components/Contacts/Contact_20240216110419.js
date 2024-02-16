import React from "react";
import "./Contact.css";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
    return (
        <div className="container contact-section" id="contact">
          <div className="section-title bottom">
            <h2>Contact Me</h2>
            <span className="line"></span>
          </div>
          <div className="row">
            <Fade bottom>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                <div className="contact-form-design">
                  <div className="text-center">
                    <h5>Contact</h5>
                  </div>
                  <form>
                    <div className="contact-form">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="contact-form">
                      <label className="form-label">E-mail</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="contact-form">
                      <label className="form-label">Message</label>
                      <textarea rows="4" type="text" className="form-control" />
                    </div>
                    <div className="button-submit">
                      <p>
                        Send <RiSendPlaneLine />
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Fade>
    
            <Fade right>
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 connect">
                <div className="text">
                  <h2>Let's talk about everything web and mobile.</h2>
                  <h5>
                    If you have any questions about any project, don't hesitate to
                    make contact.
                  </h5>
                  <h5>
                    I'm available to chat with! Drop a comment,
                    question, or a concern by E-mail or WhatsApp.
                  </h5>
                  <a href="mailto:opeyemioladunjoye73@gmail.com">
                    <AiOutlineMail />
                    opeyemioladunjoye73@gmail.com
                  </a>
                  <a href="https://wa.me/+2347061095032">
                    <BsWhatsapp />
                    https://wa.me/+2347061095032
                  </a>
                </div>
                <div className="socials">
                <a href="https://www.linkedin.com/in/oladunjoye-opeyemi-681276234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0YPL7tcpQUCzZjwwYz01qA%3D%3D">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/Laoye_Lazduarte">
                    <FaTwitter />
                  </a>
                  <a href="https://github.com/Laoye99">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      );
};

export default Contact;