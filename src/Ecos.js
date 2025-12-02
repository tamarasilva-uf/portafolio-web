import "./Libro.css";
import ecos from "./imagenes/Ecos.png";
import ecos1 from "./imagenes/Ecos1.png";
import ecos2 from "./imagenes/Ecos2.png";

function Ecos () {
    return (
        <section className="ecos">
            <h1 className="libro-titulo">Ecos de la identidad</h1>

            <div className="proyecto">
                <div className="proyecto-bloque">
                    <img src={ecos} className="libro-img" />
                    <p className="proyecto-texto">
                    “Tres textos: ecos de la identidad” es una publicación que 
                    reúne fragmentos de Elicura Chihuailaf, Pedro Lemebel 
                    y Gabriela Mistral, tres voces fundamentales de la 
                    literatura chilena y latinoamericana. El proyecto 
                    propone un diálogo visual y conceptual entre distintas 
                    miradas sobre la identidad, la lengua y la memoria 
                    cultural, abordando temas como la oralidad, la 
                    resistencia y la sensibilidad poética.
                    </p>
                </div>

                <div className="proyecto-bloque invertido">
                    <p className="proyecto-texto">
                    El diseño se construyó a partir del contraste entre la 
                    materialidad de los textos y la limpieza del espacio 
                    en blanco. Se empleó una retícula de lectura clara y 
                    simétrica, que permitió equilibrar los diferentes 
                    estilos de escritura, y una paleta cromática sobria 
                    que refuerza la cohesión entre los tres autores. La 
                    tipografía fue seleccionada para resaltar el tono 
                    ensayístico y poético de los contenidos, manteniendo 
                    una jerarquía visual coherente en títulos, citas y 
                    cuerpo de texto. 
                    </p>
                    <img src={ecos1} className="libro-img" />
                </div>

                <div className="proyecto-bloque">
                    <div className="galeria-multiple">
                    <img src={ecos2} className="libro-img" /> 
                    </div>
                    <p className="proyecto-texto">
                    El resultado final es una pieza editorial que busca 
                    reflejar la pluralidad de voces que conforman la 
                    identidad cultural de Chile, invitando a la reflexión 
                    sobre la palabra como territorio común y como 
                    herramienta de resistencia y belleza.
                    </p>
                </div>
                
            </div>
        </section>
    );
}

export default Ecos;