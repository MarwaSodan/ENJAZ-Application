import './Home.css';
import phone from "../../Assets/phone.png"
import appstore from "../../Assets/appstore.png"
import googleplay from "../../Assets/googleplay.png"
import group from "../../Assets/Group.png"


function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1><span>ENJAZ</span> Application</h1>
        <p><b>ENJAZ</b> application provides users in Kuwait with easy access to translation and print services.
          It features a user-friendly interface to locate the nearest service centers, view available
          services, and contact details. Ideal for individuals and businesses needing quick and reliable
          translation and printing solutions, the app simplifies the process of finding professional
          assistance right at your fingertips.
        </p>
        <div className="buttons">
          <button className="btn-primary">Download</button>
          <button className="btn-secondary">Learn More</button>
        </div>
        <div className="store-buttons">
          <img src={appstore} alt="Download on App Store" />
          <img src={googleplay} alt="Get it on Google Play" />
        </div>

      </div>
      <div className="home-image">
        <img className="phone-img" src={phone} alt="ENJAZ app preview" />
        <img className="curve-bg" src={group} alt="background curve" />
      </div>

    </section>
  );
}

export default Home;
