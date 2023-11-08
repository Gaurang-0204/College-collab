
import './App.css';
//import { Login,} from './components/Login';
//import { Signup } from './components/Signup';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Login from './components/Login';
import  Signup  from './components/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>  
      
    
    </Router>
  );
}

export default App;
