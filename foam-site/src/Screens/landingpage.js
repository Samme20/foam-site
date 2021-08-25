import "./landingpage.css";

import peelImage from "../Images/peeling.png";

function landingpage() {
  return (
    <div className="land-container">
      <div className="banner">
        <div className="start-button">Intresseanmälan</div>
      </div>

      <div className="info-container">
        <div>
          <h2>Spice up your room or studio</h2>
          <p>
            Awesome looking foam in many diffrent shapes, sized and colors will make your
            room look like a professional studio. It does not only look good, it also helps
            with sound insulation and stops echo, perfect for those late gaming nights ;)
          </p>
        </div>

        <div className="text2">
          <h2>Easy to install</h2>
          <p>
            We were sick of the bad glue on accoustic foam and the difficulty to get 
            them up on the walls. Therefore we set out on a mission to create,{" "}
            <b>durable</b>, <b>good looking</b> and <b>affordable</b> accoustic
            foam. We assure you a peel free experience and solid looking foam.
          </p>
        </div>
      </div>
    </div>
  );
}
export default landingpage;
