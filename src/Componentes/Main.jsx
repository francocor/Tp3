import "../css/Main.css"
import Accordion from 'react-bootstrap/Accordion';

export const Main = ({alumno}) => {
  
  return (
    <div>

      <div>
        <p>¡Hola! Soy {alumno.nombre} y tengo {alumno.edad} años. En esta presentación, me gustaría compartir con ustedes mis dos grandes pasiones: los juegos en línea y los deportes.
        En cuanto a los juegos en línea, puedo decir que soy un verdadero apasionado. Me encanta pasar horas jugando a diferentes juegos y explorando nuevos mundos virtuales. Desde juegos de estrategia hasta juegos de rol y aventura, siempre estoy buscando algo nuevo que me mantenga entretenido. También me gusta conectarme con otros jugadores de todo el mundo y formar equipos para lograr objetivos comunes. En resumen, los juegos en línea son una parte importante de mi vida.
        Además de los juegos, también soy un gran fanático de los deportes. Me gusta ver y practicar diferentes deportes, como el fútbol, ​​el baloncesto y el tenis. Siempre trato de mantenerme activo y en forma, y ​​el deporte es una gran manera de hacerlo. Me encanta la adrenalina que se siente cuando compito, ya sea en un partido de equipo o en un partido individual. Para mí, el deporte es una forma de liberar el estrés y mantenerme saludable.
        En resumen, soy  {alumno.nombre}, un joven de {alumno.edad} años a quien le encantan los juegos en línea y los deportes. Espero que esta breve presentación les haya dado una idea de quién soy y de mis intereses. ¡Gracias por su atención!</p>
      </div>
        
    
        
    </div>
  )
}

export default Main