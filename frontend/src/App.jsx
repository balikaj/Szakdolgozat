import { Routes, Route } from 'react-router-dom';
import Fooldal from './pages/Fooldal';
import Belepes from './pages/Belepes';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Fooldal/>}/>
          <Route path='/belepes.html' element={<Belepes />}/>
      </Routes>
    </>
  )
}

export default App
