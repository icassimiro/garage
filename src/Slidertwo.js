

import micro1 from "./Images/micro1.jpg";
import micro2 from "./Images/micro2.jpg";
import micro3 from "./Images/micro3.jpg";
import micro4 from "./Images/micro4.jpg";
import micro5 from "./Images/micro5.jpg";
import micro6 from "./Images/micro6.jpg";


import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";





const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slidertwo = () => (
  <div className="slideheight">


  <div className="divfullslide">
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={12000} className="autoslider">
      
      <div className="divcarousel">
   

        <img src={micro1} className="docicon" />
        
      </div>
      <div className="divcarousel">
      

        <img src={micro2} className="docicon" />
        
      </div>
      <div className="divcarousel">
     

        <img src={micro3} className="docicon" />
        
      </div>
      <div className="divcarousel">
     

     <img src={micro4} className="docicon" />
     
   </div>
   <div className="divcarousel">
     

     <img src={micro5} className="docicon" />
     
   </div>
   <div className="divcarousel">
     

     <img src={micro6} className="docicon" />
     
   </div>

  
   
      
      
    </AutoplaySlider>
  </div>
</div>
);
export default Slidertwo;