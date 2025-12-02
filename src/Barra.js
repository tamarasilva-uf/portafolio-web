import "./Barra.css";
import logo from "./imagenes/Logo.svg";
import { Link } from "react-router-dom";

function Barra(){
    return (
        <header className="barra">
            <div className="Barra-logo">
                <Link to="/">
                    <img src={logo} alt="logo del portafolio"/>
                </Link>
            </div>
            <nav className="barra-links">
            <Link className="barra-texto" to="/proyectos">Proyectos</Link>
            <Link className="barra-texto" to="/acerca">Acerca de mí</Link>
            <Link className="barra-texto" to="/contacto">Contactos</Link>
            </nav>
        </header>
    );
}

export default Barra;