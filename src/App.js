import './App.css';
import Home from './pages/home/Home';
import Batch from './pages/batch/Batch';
import Landing from './pages/landing/Landing';
import Cob from './pages/cob/Cob';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
 <Router>
  <Routes>

    <Route path ="/" element={<Landing/>} />
    <Route path ="/home" element={<Home/>} />

    <Route path ="/batch" element={<Batch/>} />

    <Route path ="/cob" element={<Cob/>} />



  </Routes>
 </Router>
    
    
  
  );
}

export default App;
