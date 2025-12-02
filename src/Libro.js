import "./Libro.css";
import libro from "./imagenes/Libro.png";
import libro1 from "./imagenes/Libro1.png";
import libro2 from "./imagenes/Libro2.png";
import libro3 from "./imagenes/Libro3.png";
import libro4 from "./imagenes/Libro4.png";
import libro5 from "./imagenes/Libro5.png";
import libro6 from "./imagenes/Libro6.png";

function Libro() {
  return (
    <section className="libro">
      <h1 className="libro-titulo">El libro: orígenes y evoluciones</h1>

      <div className="proyecto">

        <div className="proyecto-bloque">
          <img src={libro2} className="proyecto-img" />
          <p className="proyecto-texto">
            “El libro: orígenes y evolución” es un proyecto editorial que
            explora la historia del libro como soporte del conocimiento y la
            memoria cultural. El trabajo consistió en transformar un texto
            informativo extenso en una pieza editorial visualmente coherente y
            legible mediante los principios de jerarquía, retícula y ritmo
            tipográfico.
          </p>
        </div>

        <div className="proyecto-bloque invertido">
          <p className="proyecto-texto">
            Durante el proceso se definió una retícula de doble columna,
            acompañada de tipografías serif y sans serif contrastantes para
            mejorar la claridad visual. La paleta se inspiró en un morado
            históricamente asociado al lujo y la burguesía, reforzando la idea
            del libro como objeto valioso y culturalmente significativo.
          </p>
          <img src={libro1} className="proyecto-img" />
        </div>

        <div className="proyecto-bloque">
          <img src={libro} className="proyecto-img" />
          <p className="proyecto-texto">
            La pieza final fue impresa y encuadernada manualmente, cuidando la
            materialidad y los detalles constructivos. El resultado es una
            publicación sobria y precisa que celebra la tradición editorial y
            revaloriza al libro como artefacto cultural.
          </p>
        </div>

        <div className="galeria-multiple">
          <img src={libro3} className="galeria-img" />
          <img src={libro4} className="galeria-img" />
          <img src={libro5} className="galeria-img" />
          <img src={libro6} className="galeria-img" />
        </div>

      </div>
    </section>
  );
}

export default Libro;