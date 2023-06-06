import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../css/MainAbout.css"


 
const About = () => {

  
  const [num, setNum] = useState(1);

  const handleclick = () => {
   num > 2 ? setNum(1) :  setNum(num + 1)
  }


  return (
    
    <div className="Contenedor">

        <main className="main_about">
             
            <Card style={{ width: '20rem' }} className="card_">
                  <Card.Img variant="top" src={`/${num}.jfif`} />
                  <Card.Body>
                    <Card.Title>Piasajes</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    <Button onClick={handleclick} variant="primary">Cambiar</Button>
                  </Card.Body>
              </Card>   
        </main> 

    
    </div>
    
  )
}

export default About