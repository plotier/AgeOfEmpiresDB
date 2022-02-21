import React, { Component, useState, useEffect } from 'react'
import Select from 'react-select'

export const Selector = (props) => {
    const [units, setUnits] = useState(props.options)
    const [unitsData, setUnitsData] = useState(props.totalUnitData)

    const selectHandler = value =>{
     const filtered = unitsData.filter(item=>item.name ==value.value)
     console.log(filtered)
    }

    useEffect(()=>{
     setUnits(props.options)
     setUnitsData(props.totalUnitData)
    }, [props.options, props.totalUnitData])

    return (
        <div>
        <Select options={units} onChange={e=>selectHandler(e)} />
        </div>

    )
}