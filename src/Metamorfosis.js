import "./Libro.css";
import metamorfosis01 from "./imagenes/Metamorfosis01.png";
import metamorfosis1 from "./imagenes/Metamorfosis1.png";
import metamorfosis2 from "./imagenes/Metamorfosis2.png";
import metamorfosis3 from "./imagenes/Metamorfosis3.png";

function Metamorfosis (){
    return (
        <section className="metamorfosis">
            <h1 className="libro-titulo">Metamorfosis</h1>
            
            

            <div className="proyecto">

            <div className="proyecto-bloque">
                    <img src={metamorfosis01} className="proyecto-img" />
                    <p className="proyecto-texto">
                        El proyecto Metamorfosis es el diseño integral 
                        de una marca de cerveza artesanal que busca 
                        fusionar la calidad artesanal con un diseño 
                        visual sofisticado y una profunda conexión con 
                        la biodiversidad chilena.
                    </p>
                </div>
            <div className="proyecto-bloque invertido">
                    <p className="proyecto-texto">
                        La marca está inspirada en el proceso de 
                        metamorfosis de las mariposas endémicas de 
                        Chile, que simboliza la transformación, el 
                        crecimiento y la renovación. Este concepto se 
                        aplica al producto para ofrecer una experiencia 
                        sensorial completa y un storytelling emocional 
                        que invita al consumidor a vivir una transformación 
                        en sus momentos cotidianos.
                    </p>
                    <img src={metamorfosis1} className="proyecto-img" />
            </div>

            <div className="proyecto-bloque">
                    <img src={metamorfosis3} className="proyecto-img" />
                    <p className="proyecto-texto">
                        El diseño cuenta con una estética elegante y 
                        moderna que rompe con el esquema tradicional 
                        de las cervezas. El diseño del packaging y la 
                        identidad visual se basan en la mariposa endémica 
                        Licena del tamarugo (Leptotes trigemmatus) y el 
                        arte taxonómico.
                    </p>
                </div>

            <div className="galeria-multiple">
                      <img className="libro1-img" src={metamorfosis2}/>
                    </div>
            </div>
        </section>
    );
}

export default Metamorfosis;