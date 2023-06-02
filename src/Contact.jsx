import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import MainContact from "./Componentes/MainContact"
import "./css/MainContact.css"

const contact = () => {
    return (
      <>
      <div className='Contenedor'>

      <Header/>
      <MainContact/>
      <Footer/>
      </div>
      </>
  )
}

export default contact