import { useState, useEffect } from "react";
import axios from "axios";

/*Las imagenes se pueden rescatar desde esta ruta https://aoecompanion.com/civ-icons/aztecs.png*/ 

export const UnitsList = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.aoecompanion.com/units/')
      .then((res) => {
        setUnits(res.data)
      })
  }, []);

  return <div>
<ul>
{
units.map(item=>
    <li key={item.id}>{item.name}</li>
)}
</ul>
  </div>;
};
