import { MdArrowOutward, MdCopyright } from "react-icons/md";
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
              <a href="mailto:mudasirakhtar980@gmail.com" data-cursor="disable">
                mudasirakhtar980@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+923128729573" data-cursor="disable">
                +92 312 8729573
              </a>
            </p>
            <h4>Education</h4>
            <p>BS Computer Science, Lahore Leads University (GPA 3.5)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://moeed-naik-uiux-0v5xgvy.gamma.site/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Resume Link <MdArrowOutward />
            </a>
            <a
              href="mailto:mudasirakhtar980@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mudasir Akhtar</span>
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
