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
          <h1 className="hp">Sahara</h1>
          <p className="hpp">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button type="button">Explore</button>
        </div>
        <div className="col">
          <div className="card card1">
            <h5><Link to="/club">Western desert </Link></h5>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
          </div>
          <div className="card card2">
            <h5>bitch1</h5>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
          </div>
          <div className="card card3">
            <h5>bitch2</h5>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
          </div>
          <div className="card card4">
            <h5>bitch3</h5>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage





































