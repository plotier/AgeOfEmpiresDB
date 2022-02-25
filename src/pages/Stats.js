import React from 'react'
import { RatingList } from '../components/RatingList'
import { Navbar } from '../components/Navbar'
import '../styles/Stats.css'

export const Stats = (props) => {
  return (
    <div className='backgroundRatingListContainer'>
      <Navbar />

      <div className="row">
<div className="col d-flex flex-column align-items-center">
<h3>Single DE Ranking</h3>

      <RatingList />

</div>
<div className="col"></div>

      </div>


    </div>
  )
}

