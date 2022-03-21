import React from 'react'
import {CivilizationList} from '../components/CivilizationList'
import '../styles/Civilizations.css'
import { Navbar } from '../components/Navbar'

export const Civilizations = _ => {
  return (
    <div className='backgroundContainerCivilization'>
          <Navbar />
      <CivilizationList/>
    </div>
  )
}

