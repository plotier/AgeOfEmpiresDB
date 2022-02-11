import React from 'react'
import '../styles/Home.css'
import castle from '../img/castle.png'
import towncenter from '../img/towncenter.png'
import defensive from '../img/defensive.png'
import { Navbar } from '../components/Navbar'

export const Home = (props) => {
    return (
        <div className='backgroundContainer'>
<Navbar/>
<div className="homeMenu">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={castle} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Units</h5>
                    <p className="card-text">Exhaustive overview of every unit in the game</p>
                    <a href="/units/" className="btn btn-primary">UNITS</a>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={towncenter} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Civilizations</h5>
                    <p className="card-text">Exhaustive overview of every civilization in the game</p>
                    <a href="/civilizations/" className="btn btn-primary">CIVILIZATIONS</a>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={defensive} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Stats</h5>
                    <p className="card-text">Exhaustive overview of stats in the game</p>
                    <a href="/stats/" className="btn btn-primary">STATS</a>
                </div>
            </div>

            </div>
        </div>
    )
}





