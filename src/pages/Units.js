import React from 'react'
import { UnitsList } from '../components/UnitsList'
import { Navbar } from '../components/Navbar'
import "../styles/Units.css"

export const Units = (props) => {
  return (

    <div className='backgroundContainerUnits'>
      <Navbar />
      <UnitsList />
    </div>
  )
}

