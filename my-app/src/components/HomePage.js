import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src=" " alt="" className="" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Region</li>
            <li>About</li>
          </ul>
        </nav>
        <img src="" alt="" className="menu-icon" />
      </div>
      <div className="row">
        <div className="col">
          <h1 className="hp">DYPIU</h1>
          <p className="hpp">
          D Y Patil International University, Akrudi, Pune is one of the finest private universities in India, which is providing the highly-skilled talent to the nation and overseas. The university has recently become operational as a state private university and offering the best quality higher education in the field of engineering, management, international business, graphic design, biotechnology, journalism, and mass communication.

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
            <h5>Events</h5>
            <p>
              Click here to know and join the upcmoing events. 
            </p>
          </div>
          <div className="card card3">
            <h5>Moodle</h5>
            <p>
              Acces your courses here.
            </p>
          </div>
          <div className="card card4">
            <h5>Collpoll</h5>
            <p>
             Check and pay your dues here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage





































