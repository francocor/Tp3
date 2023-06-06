import Home from './Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from "./Contact";
import About from './About';



export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path='/About' element={<About/>} />
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App