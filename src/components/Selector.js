import React, { Component, useState, useEffect } from 'react'
import Select from 'react-select'
import '../styles/Selector.css'
import imperial from "../img/imperial.png"

export const Selector = (props) => {
    const [units, setUnits] = useState(props.options)
    const [unitsData, setUnitsData] = useState(props.totalUnitData)
    const [unitsLineData, setUnitsLineData] = useState(props.totalUnitLineData)
    const [chosenUnit, setChosenUnit] = useState("")

    const selectHandler = value => {
        const filtered = unitsData.filter(item => item.name == value.value)
        setChosenUnit(filtered)
    }

    useEffect(() => {
        setUnits(props.options)
        setUnitsData(props.totalUnitData)
        setUnitsLineData(props.totalUnitLineData)
    }, [props.options, props.totalUnitData, props.totalUnitLineData])

    return (
        <div>
            <Select className='selectStyle' options={units} onChange={e => selectHandler(e)} />


            {chosenUnit &&
                <div className='text-light d-flex row mt-5'>
                 <div className="d-flex justify-content-center ">
                        {chosenUnit[0].icon_url !== ".png" && ".jpg" ?
                            <img className='unitSelectorIcon me-5' src={"https://aoecompanion.com/icons/" + chosenUnit[0].icon_url} alt="" /> :
                            <img className='unitSelectorIcon me-5' src={imperial} alt="" />
                        }
                   
                        {chosenUnit[0].unit_line !== null &&
                            unitsLineData.map(item => item.id == chosenUnit[0].unit_line.id &&
                                <div key={item.id} className='row'>
                                    <div className="col">                                   <h3>Category</h3>
                                        {item.category.toUpperCase()}
                                        <h3>Name</h3>
                                        {chosenUnit[0].name}
                                       
                                    </div>
                                    <div className="col">
                                    <h3>Counter Units</h3>
                                        <ul>
                                            {
                                                item.units.map(unit => unit.id == chosenUnit[0].id &&
                                                    item.unit_counters.map(item => unitsLineData.map(lastItem => lastItem.id == item.unit_id &&
                                                        <li key={unit.id}>{lastItem.name}</li>)))
                                            }
                                        </ul></div>

                                </div>
                            )}
                    </div>





                    {
                        chosenUnit[0].unit_line == null &&
                        chosenUnit[0].unit_counters.map(item => unitsLineData.map(lastItem => lastItem.id == item.unit_id &&
                            <li>{lastItem.name}</li>))
                    }




                </div>
            }


        </div>

    )
}


/*
Elijo la unidad, y me da el id de unit_line
mapeamos unit_line y encontramos esa l??nea
mapeamos las contraunidades de la list



*/