import benz from "../Images/benz.png";
import Top from "../Top";
import { IoLogoWhatsapp } from "react-icons/io";


import Slider from "../Slider";
import Slidertwo from "../Slidertwo";
import { FaBusAlt } from "react-icons/fa";
import { FaFilePowerpoint } from "react-icons/fa6";


export default function Onibus() {
    return (<div>
        <Top />
     


        <div className="divbus">
            <div className="divtext"><h2 className="text">Carros <strong>importados</strong> elegantes e ônibus perfeitos para seus negócios.
                <strong> Revisados</strong>, confiáveis e prontos para impressionar. Na <strong>GARAGE</strong>, a <strong>qualidade</strong>    é garantida!
            </h2></div>
            <div className="divtextbus"><FaBusAlt className="textbus"/></div>

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

                    <div className="divbtn"><a target="_blank" href="https://drive.google.com/file/d/11G2uTizlkukljHAcO6Q5W2YCwxmz-kQn/view?usp=sharing">
                 <div className="divpowerpoint">
                        <button className="btn">VISUALIZAR POWERPOINT <FaFilePowerpoint className="ppt" /></button>
                        </div>
                    </a>
                    <div className="divbtnwpp">
                    <h3 className="h3name">WHATSAPP ADEMIR</h3>
                        <a target="_blank" href="https://wa.me/31997188046">
                        
                      
                            <button className="btn1"><IoLogoWhatsapp className="wppi" /></button>
                       
                        </a>
                        </div>
                        <div className="divbtnwpp">
                    <h3 className="h3name">WHATSAPP GIOVANI</h3>
                        <a target="_blank" href="https://wa.me/31997149909">
                        
                        
                            <button className="btn1"><IoLogoWhatsapp className="wppi" /></button>
                        </a>
                        </div>
                    </div>
                </div>

            </div>


            <Slidertwo />
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

                    <div className="divbtn"><a target="_blank" href="https://drive.google.com/file/d/11G2uTizlkukljHAcO6Q5W2YCwxmz-kQn/view?usp=sharing">
                 <div className="divpowerpoint">
                        <button className="btn">VISUALIZAR POWERPOINT <FaFilePowerpoint className="ppt" /></button>
                        </div>
                    </a>
                    <div className="divbtnwpp">
                    <h3 className="h3name">WHATSAPP ADEMIR</h3>
                        <a target="_blank" href="https://wa.me/31997188046">
                        
                      
                            <button className="btn1"><IoLogoWhatsapp className="wppi" /></button>
                       
                        </a>
                        </div>
                        <div className="divbtnwpp">
                    <h3 className="h3name">WHATSAPP GIOVANI</h3>
                        <a target="_blank" href="https://wa.me/31997149909">
                        
                        
                            <button className="btn1"><IoLogoWhatsapp className="wppi" /></button>
                        </a>
                        </div>
                    </div>
                </div>

            </div>



            <div className="divdireitos"><h3 className="direitos">© GIOVANI AUTOBUS.</h3></div>

        </div></div>)
}