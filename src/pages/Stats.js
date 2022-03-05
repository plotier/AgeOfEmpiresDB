import React from 'react'
import { RatingList } from '../components/RatingList'
import { Navbar } from '../components/Navbar'
import '../styles/Stats.css'
import { useSelector } from 'react-redux'

export const Stats = _ => {
  const logged = useSelector(state => state.logged);

  return (
    <div className='backgroundRatingListContainer'>
      <Navbar blink={logged} />
      <div className="row">
        <div className="d-flex flex-column align-items-center">
          {logged &&
            <RatingList />}
          {!logged &&
            <div>You must be logged to access the direct AOE2 official ranking <div></div>

            </div>}
        </div>
      </div>
    </div>
  )
}

