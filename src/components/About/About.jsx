import './About.css';
import phoneAbout from "../../Assets/phone-about.png"

function About() {
  return (
    <section className="about" id="about">
      <div>
        <h2>ABOUT US</h2>
        <p className="subtitle">At ENJAZ, we believe in the power of community and creativity</p>

      </div>
      <div className='about-total'>

        <div className="about-content">

          <h3>
            Our platform allows users to <br />
            create groups, share diverse <br />
            content, and more.
          </h3>

          <p className="description">
            With robust monetization capabilities, users can turn their passion <br /> into a profession, offering exclusive content and products to their audience.
          </p>

          <div className="about-buttons">
            <button className="btn-primary">Download</button>
            <button className="btn-secondary">Know More</button>
          </div>
        </div>

        <div className="about-image">
          <img src={phoneAbout} alt="ENJAZ app on phone" />
        </div>
      </div>
    </section>
  );
}

export default About;
