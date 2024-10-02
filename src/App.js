import './App.css';
import Cob from './pages/cob/Cob';
import Landing from './pages/landing/Landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
 <Router>
  <Routes>

    <Route path ="/" element={<Landing/>} />
    <Route path ="/cob" element={<Cob/>} />


  </Routes>
 </Router>
    
    
  
  );
}

export default App;
