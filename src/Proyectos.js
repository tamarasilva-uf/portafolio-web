import "./Proyectos.css";
import animación from "./imagenes/Animación.png";
import animación1 from "./imagenes/Animación1.png";
import boton from "./imagenes/Boton.svg";
import ecos from "./imagenes/Ecos.png";
import ecos1 from "./imagenes/Ecos1.png";
import libro from "./imagenes/Libro.png";
import libro1 from "./imagenes/Libro1.png";
import metamorfosis from "./imagenes/Metamorfosis.png";
import metamorfosis1 from "./imagenes/Metamorfosis1.png";
import { Link } from "react-router-dom";

function Proyectos() {
    return (
        <section className="Proyectos" id="proyectos">
            <h1 className="proyectos-titulo">Editorial</h1>

            <div className="proyecto-grid">
                <img className="proyecto-img" src={libro} alt="Proyecto editorial 1" />

                <div className="proyecto-lateral">
                <h2 className="proyecto-subtitulo">El libro: origenes y evoluciones</h2>
                <img className="proyecto-img" src={libro1} alt="Proyecto editorial 1" />
                </div>
            </div>

                <Link to="/libro" className="btn-libro">
                 <button className="proyecto-btn">
                    <img src={boton} alt="boton"/>
                </button>
                </Link>

            <div className="proyecto-grid">
                 <img className="proyecto-img" src={ecos}/>

                <div className="proyecto-lateral">
                <h2 className="proyecto-subtitulo">Ecos de la identidad</h2>
                <img className="proyecto-img" src={ecos1}/>
                </div>
            </div>
                <Link to="/ecos" className="btn-ecos">
                <button className="proyecto-btn">
                    <img src={boton} alt="boton"/>
                </button>
                </Link>

            <h1 className="proyectos-titulo">Packaging</h1>

            <div className="proyecto-grid">
                <img className="proyecto-img" src={metamorfosis}/>

                <div className="proyecto-lateral">
                <h2 className="proyecto-subtitulo">Metamorfosis</h2>
                <img className="proyecto-img" src={metamorfosis1}/>
                </div>
            </div>
                <Link to="/metamorfosis" className="btn-metamorfosis">
                <button className="proyecto-btn">
                    <img src={boton} alt="boton"/>
                </button>
                </Link>

        </section>
        
    )
}

export default Proyectos;