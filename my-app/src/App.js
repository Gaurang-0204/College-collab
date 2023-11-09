
import './App.css';
//import { Login,} from './components/Login';
//import { Signup } from './components/Signup';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Login from './components/Login';
import  Signup  from './components/Signup';
import HomePage from './components/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
      </Routes>  
      
    
    </Router>
  );
}

export default App;
