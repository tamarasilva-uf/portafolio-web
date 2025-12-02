import "./Landing.css";
import my from "./imagenes/My.png";

function Landing() {
    return (
        <section className="landing" id="inicio">
            <div className="landing-img">
                <img src={my} alt="foto mia"/>
            </div>
            
            <div className="landing-contenido">
                <h1 className="landing-titulo">Hola, soy Tamara</h1>
                <h2 className="landing-subtitulo">y soy diseñadora gráfica</h2>

                <p className="landing-text">
            En este portafolio encontrarás una selección 
            de mis proyectos más representativos, donde 
            exploro diferentes lenguajes visuales, metodologías 
            de diseño y soluciones enfocadas en usuarios. Mi 
            objetivo es seguir creciendo, colaborando y aportando 
            valor a cada proyecto que toco.
                </p>

            

            </div>
        </section>
    )
}

export default Landing;