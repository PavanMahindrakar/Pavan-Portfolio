import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:pdmahindrakar@gmail.com" data-cursor="disable">
                pdmahindrakar@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 8830800945</p>

            <h4>Location</h4>
            <p>Solapur, Maharashtra, India</p>
          </div>
          <div className="contact-box contact-connect">
            <h4>Let's Connect</h4>
            <p>
              I'm always open to discussing
              new ideas, collaborations, or opportunities.
            </p>
            
            <p className="tagline" data-cursor="pointer">
              Turning data into intelligent systems.
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Aspiring AI/ML Engineer <br /> <span>Pavan Mahindrakar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
