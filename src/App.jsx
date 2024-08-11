import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


function App() {
  

  return (
      <Router>
      <Navbar/>
      {/* <Routes>
      <Route path='/' element={<INICIO/>}/>
          <Route path='/PC' element={<PCCategory category="PC"/>}/>
          <Route path='/PORTATIL' element={<PORTATILCategory category="PORTATIL"/>}/>
          <Route path='/ACCESORIOS' element={<ACCESORIOSCategory category="ACCESORIOS"/>}/>
          <Route path='/LISTADEPRECIOS' element={<LISTADEPRECIOSCategory category="LISTADEPRECIOS"/>}/>
          <Route path='/CONTACTO' element={<CONTACTOCategory category="CONTACTO"/>}/>
      </Routes>    */}
      </Router>
      
  );
}

export default App
