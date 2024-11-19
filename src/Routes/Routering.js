import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Onibus from "../RoutesMenu/Onibus";
import App from "../App";

const Routering = () => {
    return (
      
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
        
                <Route path="/onibus" element={<Onibus />} />
            </Routes>
        </Router>
  
    );
};
export default Routering;