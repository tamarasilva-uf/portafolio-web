import "./Contacto.css"
import instagram from "./imagenes/Instagram.svg";
import behance from "./imagenes/Behance.svg";
import linkedIn from "./imagenes/LinkedIn.svg";



function Contacto() {
    return (
        <section className="contacto">

        <h1 className="contacto-titulo">Contáctame</h1>

        <p className="contacto-descripcion">
        Si quieres colaborar o conversar sobre un proyecto,
        estaré encantada de leerte.
        </p>

    <div className="contacto-redes">
        <a
        href="https://www.instagram.com/tamarx.sol/"
        target="_Black"
        >
        <img src={instagram}/>
        </a>
        <a
        href="https://www.behance.net/tamarasoledad"
        target="_Black"
        >
        <img src={behance}/>
        </a>
        <a
        href="https://www.linkedin.com/top-content?trk=guest_homepage-basic_guest_nav_menu_topContent"
        target="_Black"
        >
        <img src={linkedIn}/>
        </a>
    </div>


</section>
    )
}

export default Contacto;