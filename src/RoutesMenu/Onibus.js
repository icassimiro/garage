import benz from "../Images/benz.png";
import Top from "../Top";
import { IoLogoWhatsapp } from "react-icons/io";


import Slider from "../Slider";
import Slidertwo from "../Slidertwo";
import { FaBusAlt } from "react-icons/fa";
import { FaFilePowerpoint } from "react-icons/fa6";
import giovani from "../Images/giovani.png";


export default function Onibus() {
    return (<div>
        <Top />



        <div className="divbus">
            <div className="divlogo"><img src={giovani}></img></div>
            <div className="divtext"><h2 className="text">Encontre seu veículo na <strong>Giovani Autobus</strong>! Oferecemos <strong>ônibus</strong> e <strong>carros</strong> selecionados, com a <strong>qualidade</strong> que você merece. Venha conhecer nosso <strong>
                estoque</strong>!
            </h2></div>
            <div className="divtextbus"><FaBusAlt className="textbus" /></div>

            <Slider />
            <div className="infos">
                <div className="divtextinfo">
                    <img className="iconb" src={benz}></img>
                    <h2 className="type">Ônibus Mercedes & Caio</h2>

                    <h2 className="ano">Ano</h2>
                    <h2 className="ano1">2012 & 2013</h2>
                    <h3 className="km">KM</h3>
                    <h3 className="km1">XX.XXXX</h3>
                    <h3 className="cor">Cor</h3>
                    <h3 className="cor1">Verde & Azul  </h3>
                    <h3 className="cond">Condição</h3>
                    <h3 className="cond1">Completamente revisado</h3>

                    <div className="divbtn"><a target="_blank" href="https://docs.google.com/presentation/d/1pqdRN59I-HyYTxr1FXRJBvPmve_NV23b/edit?usp=sharing&ouid=100082243876216968996&rtpof=true&sd=true">
                 <div className="divpowerpoint">
                        <button className="btn">VISUALIZAR POWERPOINT <FaFilePowerpoint className="ppt" /></button>
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


            <Slidertwo />
            <div className="infos">
                <div className="divtextinfo">
                    <img className="iconb" src={benz}></img>
                    <h2 className="type">Ônibus Mercedes Mascarello</h2>

                    <h2 className="ano">Ano</h2>
                    <h2 className="ano1">2013 & 2014</h2>
                    <h3 className="km">KM</h3>
                    <h3 className="km1">101.773</h3>
                    <h3 className="cor">Cor</h3>
                    <h3 className="cor1">Branca</h3>
                    <h3 className="cond">Condição</h3>
                    <h3 className="cond1">Completamente revisado</h3>
                    <div className="divbtn"><a target="_blank" href="https://docs.google.com/presentation/d/1jIAuycwuzcVi6q7Dd--W7ADMY83-Yt4_/edit?usp=sharing&ouid=100082243876216968996&rtpof=true&sd=true">
                 <div className="divpowerpoint">
                        <button className="btn">VISUALIZAR POWERPOINT <FaFilePowerpoint className="ppt" /></button>
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



            <div className="divdireitos"><h3 className="direitos">© GIOVANI AUTOBUS.</h3></div>

        </div></div>)
}