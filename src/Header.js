
import { IoLogoWhatsapp } from "react-icons/io";


import icon from "./Images/icon.png";
import { FaFilePowerpoint } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import Sliderthree from "./Sliderthree";
import giovani from "./Images/giovani.png";
import { FaCamera } from "react-icons/fa";

export default function Header() {

    return (
        <div className="cars">
            <div className="divlogo"><img src={giovani}></img></div>
            <div className="divtext"><h2 className="text">Encontre seu veículo na <strong>Giovani Autobus</strong>! Oferecemos <strong>ônibus</strong> e <strong>carros</strong> selecionados, com a <strong>qualidade</strong> que você merece. Venha conhecer nosso <strong>
                estoque</strong>!
            </h2></div>
            <div className="divtextbus"><FaCar className="textcar"/></div>
            <Sliderthree />
            <div className="infos">
                <div className="divtextinfo">
                    <img className="iconb" src={icon}></img>
                    <h2 className="type">BMW 320i</h2>

                    <h2 className="ano">Ano</h2>
                    <h2 className="ano1">2018</h2>
                    <h3 className="km">KM</h3>
                    <h3 className="km1">65.000</h3>
                    <h3 className="cor">Cor</h3>
                    <h3 className="cor1">Preta  </h3>
                    <h3 className="cond">Condição</h3>
                    <h3 className="cond1">Completamente revisado</h3>

                    <div className="divbtn"><a target="_blank" href="https://ibb.co/B2p9tJB">
                 <div className="divpowerpoint">
                        <button className="btn">VISUALIZAR FOTOS<FaCamera className="ppt" /></button>
                        </div>
                    </a>
                    <div className="divbtnwpp">
                  
                        <a target="_blank" href="https://wa.me/31997188046">
                        
                      
                            <button className="btn1"><IoLogoWhatsapp className="wppi" /></button>
                       
                        </a>
                        <h3 className="h3name">WHATSAPP ADEMIR</h3>
                        </div>
                        <div className="divbtnwpp2">
                   
                        <a target="_blank" href="https://wa.me/31997149909">
                        
                        
                            <button className="btn1"><IoLogoWhatsapp className="wppi" /></button>
                        </a>
                        <h3 className="h3name">WHATSAPP GIOVANI</h3>
                        </div>
                    </div>
                </div>

            </div>
            
   
            <div className="divdireitos"><h3 className="direitos">© 2024 GIOVANI AUTOBUS.</h3></div>

        </div>


    )
}