
import './App.css';
//import { Login,} from './components/Login';
//import { Signup } from './components/Signup';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Login from './components/Login';
import  Signup  from './components/Signup';
import HomePage from './components/HomePage';
import Club from './components/Club/Club';
import Showclub from './components/Club/Showclub';
import Createclub from './components/Club/Createclub';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path='/createclub' element={<Createclub/>}/>
        <Route path='/club' element={<Club/>}/>
        <Route path='/Showclub/:clubid' element={<Showclub/>}/>
        <Route path='/createclub' element={<Createclub/>}/>
      </Routes>  
      
    
    </Router>
  );
}

export default App;
