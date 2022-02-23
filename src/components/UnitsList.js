import { useState, useEffect } from "react";
import axios from "axios";
import { Selector } from "./Selector";

/*Las imagenes se pueden rescatar desde esta ruta https://aoecompanion.com/civ-icons/aztecs.png*/

export const UnitsList = () => {
  const [units, setUnits] = useState([]);
  const [totalUnitData, setTotalUnitData]=useState()
  const [totalUnitLineData, setTotalUnitLineData]=useState()

  useEffect(() => {
    axios
      .get('https://api.aoecompanion.com/units/')
      .then((res) => {
        let unitsToSave = res.data.map(item => (
          { value: item.name, label: item.name }
        ))
        setUnits(unitsToSave)
        let totalUnitData = res.data
        setTotalUnitData(totalUnitData)
      })
  }, []);

  useEffect(()=>{
    axios
    .get('https://api.aoecompanion.com/unit-lines')
    .then((res)=>{
      let totalUnitLineData = res.data
      setTotalUnitLineData(totalUnitLineData)
    })
  },[])

  return <div>
    <Selector options={units} totalUnitData={totalUnitData} totalUnitLineData={totalUnitLineData} />
  </div>;
};
