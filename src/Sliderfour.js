

import volare1 from "./Images/volare1.jpg";
import volare2 from "./Images/volare2.jpg";
import volare3 from "./Images/volare3.jpg";
import volare4 from "./Images/volare4.jpg";
import volare5 from "./Images/volare5.jpg";
import volare6 from "./Images/volare6.jpg";


import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";





const AutoplaySlider = withAutoplay(AwesomeSlider);

const Sliderfour = () => (
  <div className="slideheight">


  <div className="divfullslide">
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={12000} className="autoslider">
      
      <div className="divcarousel">
   

        <img src={volare1} className="docicon" />
        
      </div>
      <div className="divcarousel">
      

        <img src={volare2} className="docicon" />
        
      </div>
      <div className="divcarousel">
     

        <img src={volare3} className="docicon" />
        
      </div>
      <div className="divcarousel">
     

     <img src={volare4} className="docicon" />
     
   </div>
   <div className="divcarousel">
     

     <img src={volare5} className="docicon" />
     
   </div>
   <div className="divcarousel">
     

     <img src={volare6} className="docicon" />
     
   </div>

  
   
      
      
    </AutoplaySlider>
  </div>
</div>
);
export default Sliderfour;