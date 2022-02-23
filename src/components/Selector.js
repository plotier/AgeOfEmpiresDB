import React, { Component, useState, useEffect } from 'react'
import Select from 'react-select'

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
            <Select options={units} onChange={e => selectHandler(e)} />
            {chosenUnit &&
                <div>
                    {chosenUnit[0].unit_line !== null &&
                        unitsLineData.map(item => item.id == chosenUnit[0].unit_line.id &&

                            <div>
                                <ul>
                                    <h3>Category</h3>
                                    {item.category}
                                    <h3>Name</h3>
                                    {chosenUnit[0].name}
                                    <h3>Counter Units</h3>

                                    {
                                        //   chosenUnit[0].id 
                                        item.units.map(unit => unit.id == chosenUnit[0].id && item.unit_counters.map(item => unitsLineData.map(lastItem => lastItem.id == item.unit_id && <li>{lastItem.name}</li>)))

                                    }
                                </ul>
                            </div>
                        )}
                </div>
            }


        </div>

    )
}


/*
Elijo la unidad, y me da el id de unit_line
mapeamos unit_line y encontramos esa línea
mapeamos las contraunidades de la list



*/