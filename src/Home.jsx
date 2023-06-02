import Header from "./Componentes/Header"
import Main from "./Componentes/Main"
import Footer from "./Componentes/Footer"
import Contacto from "./Componentes/MainContact"
import "../src/css/Home.css"

export const Home = () => {
  const Alumno={"nombre":"Franco", "apellido":"Cornejo", "edad":27, "legajo":55754, "deporteFavorito":"Futbol"}
  return (
    <>
    <div className="Contenedor">
      <Header/>
      <Main alumno={Alumno}/>
      <Footer/>
    </div>
    </>
  )
}

export default Home