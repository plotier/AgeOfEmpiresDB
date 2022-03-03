import React from 'react'
import { RatingList } from '../components/RatingList'
import { Navbar } from '../components/Navbar'
import '../styles/Stats.css'

export const Stats = (props) => {
  return (
    <div className='backgroundRatingListContainer'>
      <Navbar />

      <div className="row">
<div className="d-flex flex-column align-items-center">


      <RatingList />

</div>


      </div>


    </div>
  )
}

