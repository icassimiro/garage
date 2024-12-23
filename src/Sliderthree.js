
import bmw1 from "./Images/bmw1.jpg";
import bmw2 from "./Images/bmw2.jpg";
import bmw3 from "./Images/bmw3.jpg";
import bmw4 from "./Images/bmw4.jpg";  
import bmw5 from "./Images/bmw5.jpg";  
import bmw6 from "./Images/bmw6.jpg";  

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";





const AutoplaySlider = withAutoplay(AwesomeSlider);

const Sliderthree = () => (
  <div className="slideheight">


    <div className="divfullslide">
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={5000} className="autoslider">
        <div className="divcarousel">
        

          <img src={bmw1} className="docicon" />
          
        </div>
        <div className="divcarousel">
     

          <img src={bmw2} className="docicon" />
          
        </div>
        <div className="divcarousel">
        

          <img src={bmw3} className="docicon" />
          
        </div>
        <div className="divcarousel">
       

          <img src={bmw4} className="docicon" />
          
        </div>
        <div className="divcarousel">
       

          <img src={bmw5} className="docicon" />
          
        </div>
        <div className="divcarousel">
       

       <img src={bmw6} className="docicon" />
       
     </div>
        
        
      </AutoplaySlider>
    </div>
  </div>
);
export default Sliderthree;