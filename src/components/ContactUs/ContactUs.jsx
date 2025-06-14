import './ContactUs.css';
import phoneContactUs from "../../Assets/phoneContactUs.png"

function ContactUs() {
  return (
    <section className="contact-us" id="contact-us">
      <div className="contact-us-image">
        <img src={phoneContactUs} alt="ENJAZ app on phone" />
      </div>
      <div className="contact-us-content">
        <h3>
          Join us at ENJAZ, and experience the <br /> future of translation , copy and print <br /> services today.
        </h3>
        <p className="description">
          We prioritize privacy and security, providing end-to-end encryption and comprehensive privacy settings. With ENJAZ, users can communicate freely, knowing their data is secure.
        </p>
        <div className="contact-us-buttons">
          <button className="btn-primary">Download</button>
          <button className="btn-secondary">Know More</button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
