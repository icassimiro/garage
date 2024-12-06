
import bus1 from "./Images/bus1.jpg";
import bus2 from "./Images/bus2.jpg";
import bus3 from "./Images/bus3.jpg";
import bus4 from "./Images/bus4.jpg";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";





const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => (


  <div className="divfullslide">
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={7000} className="autoslider">
      <div className="divcarousel">


        <img src={bus1} className="docicon" />

      </div>
      <div className="divcarousel">


        <img src={bus2} className="docicon" />

      </div>
      <div className="divcarousel">


        <img src={bus3} className="docicon" />

      </div>
      <div className="divcarousel">


        <img src={bus4} className="docicon" />

      </div>


    </AutoplaySlider>
  </div>

);
export default Slider;