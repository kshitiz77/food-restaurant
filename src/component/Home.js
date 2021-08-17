import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <p>Welcome to Food's</p>
                <p>Kitchen</p>
                <button><Link to="/menu">Go To Menu</Link> </button>
            </div>
        </div>
    )
}

export default Home
