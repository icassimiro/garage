import bmw from "../Images/bmw.png";
import icon from "../Images/icon.png"; 
import Top from "../Top";

export default function Onibus() {
    return (<div><Top />
        <div className="cars">
            <div className="divtext"><h2 className="text">Carros <strong>importados</strong> elegantes e ônibus perfeitos para seus negócios.
                <strong> Revisados</strong>, confiáveis e prontos para impressionar. Na <strong>GARAGE</strong>, a <strong>qualidade</strong>    é garantida!
            </h2></div>
            <div className="list">
                <div className="infos">
                    <img className="icon" src={icon}></img>
                    <h2 className="type">BMW 320i</h2>

                    <h2 className="ano">Ano</h2>
                    <h2 className="ano1">2018</h2>
                    <h3 className="km">KM</h3>
                    <h3 className="km1">65.000</h3>
                    <h3 className="cor">Cor</h3>
                    <h3 className="cor1">Preta</h3>
                    <h3 className="cond">Condição</h3>
                    <h3 className="cond1">Completamente revisada</h3>

                    <div className="divbtn"><a target="_blank" href="https://drive.google.com/file/d/1xTqos3rH2A20DP3bjuqHwsvYuIOuKYHn/view">
                        <button className="btn">VISUALIZAR VEÍCULO</button>
                    </a>
                        <a target="_blank" href="https://wa.me/31997188046">
                            <button className="btn1">WPP</button>
                        </a>
                    </div>

                </div>
                <img className="bmw" src={bmw}></img>
            </div>
            <div className="divhr">
                <hr className="hr"></hr>

            </div>
       
           
            <div className="divdireitos"><h3 className="direitos">© 2024 GARAGE.</h3></div>

        </div></div>)
}