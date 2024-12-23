
import bus1 from "./Images/bus1.jpg";
import bus2 from "./Images/bus2.jpg";
import bus3 from "./Images/bus3.jpg";
import bus4 from "./Images/bus4.jpg";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import bmw1d from "./Images/bmw1d.jpg";
import bmw2d from "./Images/bmw2d.jpg";
import bmw3d from "./Images/bmw3d.jpg";
import bmw4d from "./Images/bmw4d.jpg";  












export default function Slider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

 



  return (

<div className="slideheight">

    <div className="divfullslide">
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={12000} className="autoslider">
        <div className="divcarousel" >


          <img src={bus1} className="docicon" />

        </div>
        <div className="divcarousel">


          <img src={bus2} className="docicon" />

        </div>
        <div className="divcarousel" >


          <img src={bus3} className="docicon" />

        </div>
        <div className="divcarousel" >


          <img src={bus4} className="docicon" />

        </div>
    


      </AutoplaySlider>
   
    
    </div>

    </div>

  )
}
