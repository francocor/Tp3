import Home from './Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from "./Contact";



export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App