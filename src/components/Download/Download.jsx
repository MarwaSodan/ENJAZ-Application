import './Download.css';
import phoneDownload from "../../Assets/phone-download.png"
import appstore2 from "../../Assets/appstore2.png"
import googleplay2 from "../../Assets/googleplay2.png"
import Scanme from "../../Assets/Scanme.png"


function Download() {
  return (
    <section className="download" id="download">
      <div className='download-total' >
        <div className="download-content">
          <h3>
            Download our app and get <br /> most out of it
          </h3>
          <p className="description">
            Get ENJAZ: Your Gateway to a Vibrant Digital Ecosystem
          </p>
          <div className="download-buttons">
            <div className="store-buttons">
              <a href="#"><img src={appstore2} alt="App Store" /></a>
              <a href="#"><img src={googleplay2} alt="Google Play" /></a>
            </div>
            <a href="#"><img src={Scanme} width={150} alt="Scanme" /></a>
          </div>
        </div>
        <div className="download-image">
          <img src={phoneDownload} alt="ENJAZ app on phone" />
        </div>
      </div>
    </section>
  );
}

export default Download;






