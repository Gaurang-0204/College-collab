import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

const HomePage = () => {
  let navigate = useNavigate();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const clearUserIdInLocalStorage = () => {
    localStorage.removeItem("userId");
  }
  const logout = async () => {
    try {
      await signOut(auth);
      clearUserIdInLocalStorage();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const toggleMenu = () => {
    console.log("Toggling submenu");
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  

  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><Link to='/Profile'> Profile </Link></li>
            <li className='logout'  onClick={logout}>Logout</li>
            </ul>
          <img src ="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/949d557c-cbfd-401a-ac67-1adece91733b/d5qkroq-81413a26-8956-4d21-bb82-68e7858e8c0b.png/v1/fill/w_1024,h_1024,strp/circle_profile_by_pdogkasper_d5qkroq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzk0OWQ1NTdjLWNiZmQtNDAxYS1hYzY3LTFhZGVjZTkxNzMzYlwvZDVxa3JvcS04MTQxM2EyNi04OTU2LTRkMjEtYmI4Mi02OGU3ODU4ZThjMGIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2_bFofmL8C0QKDMY5WTSld3LxaXuuOAz4F6NtRdqmj0" className="user-pic" onClick={toggleMenu}></img>
          <div className="sub-menu-wrap" id="subMenu">
              <div className="sub-menu">
                <div className="user-info">
                  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/949d557c-cbfd-401a-ac67-1adece91733b/d5qkroq-81413a26-8956-4d21-bb82-68e7858e8c0b.png/v1/fill/w_1024,h_1024,strp/circle_profile_by_pdogkasper_d5qkroq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzk0OWQ1NTdjLWNiZmQtNDAxYS1hYzY3LTFhZGVjZTkxNzMzYlwvZDVxa3JvcS04MTQxM2EyNi04OTU2LTRkMjEtYmI4Mi02OGU3ODU4ZThjMGIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2_bFofmL8C0QKDMY5WTSld3LxaXuuOAz4F6NtRdqmj0" className="user-pic" onClick={toggleMenu}></img>
                  <h2 className ="text">Saket Arya</h2>
                </div>
              <hr />
               <a href="#" className="sub-menu-link">
                <img src=""></img>
                <p>Edit Profile</p>
                <span></span>
               </a>
              
               <a href="#" className="sub-menu-link">
                <img src=""></img>
                <p>Setting and Privacy</p>
                <span></span>
               </a>

               <a href="#" className="sub-menu-link">
                <img src=""></img>
                <p>Help and Support</p>
                <span></span>
               </a>

               <a href="#" className="sub-menu-link">
                <img src=""></img>
                <p>Setting</p>
                <span></span>
               </a>
               <a href="#" className="sub-menu-link">
                <img src=""></img>
                <p className='logout'  onClick={logout}>Logout</p>
                <span></span>
               </a>
              </div>
            </div>
        </nav>
      </div>
      
      <div className="row">
        <div className="col">
          <h1 className="hp">DYPIU</h1>
          <p className="hpp">
          DY Patil International University, Akrudi, Pune is one of the finest private universities in India, which is providing the highly-skilled talent to the nation and overseas. The university has recently become operational as a state private university and offering the best quality higher education in the field of engineering, management, international business, graphic design, biotechnology, journalism, and mass communication.
          </p>
          <button type="button">Explore</button>
        </div>
        <div className="col">
          <div className="card card1">
          <h5><Link to="/club">Clubs</Link></h5>
            <p>
              Welcome to different clubs of dypiu, click here for more more info.
            </p>
          </div>
          <div className="card card2">
            <h5><Link to='/Events'>Events</Link></h5>
            <p>
              Click here to know and join the upcmoing events. 
            </p>
          </div>
          <div className="card card3">
            <h5><a href="https://learning.dypiu.ac.in/">Moodle</a></h5>
            <p>
              Acces your courses here.
            </p>
          </div>
          <div className="card card4">
            <h5><a href="https://dypiu.collpoll.com/home">Collpoll</a></h5>
            <p>
             Check and pay your dues here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
































