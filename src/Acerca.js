import "./Acerca.css";
import acerca from "./imagenes/Acerca.png";
import ai from "./imagenes/Ai.png";
import ae from "./imagenes/Ae.png";
import id from "./imagenes/Id.png";
import ps from "./imagenes/Ps.png";

function Acerca (){
    return (
        <section className="acerca" id="acerca">

            <div className="acerca-top">

                <div className="acerca-img">
                    <img src={acerca} alt="gustos"/>
                </div>

                <div className="acerca-contenido">
                    <h1 className="acerca-titulo">Acerca de mí</h1>

                    <h2 className="acerca-text">
                        Me apasiona crear proyectos visuales que comuniquen ideas 
                        de forma clara y atractiva, pero también valoro mucho 
                        los momentos personales que me inspiran: pasar tiempo 
                        con mi familia, compartir con mi gata, leer un buen 
                        libro, ver películas y series, escuchar música y 
                        dedicarme al crochet.
                        <br/><br/>
                        Estos intereses me ayudan a mantener la creatividad, 
                        la curiosidad y la atención al detalle, cualidades que 
                        aplico en cada proyecto que desarrollo.
                    </h2>
                </div>

            </div>

            <div className="softwares">
                <h1 className="softwares-titulo">Softwares</h1>

                <div className="softwares-logos">
                    <img src={ps} alt="Photoshop"/>
                    <img src={ai} alt="Illustrator"/>
                    <img src={id} alt="InDesign"/>
                    <img src={ae} alt="After Effects"/>
                </div>
            </div>

        </section>
    )
}

export default Acerca;
