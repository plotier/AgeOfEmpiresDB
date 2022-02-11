import { useState, useEffect } from "react";
import axios from "axios";

/*Las imagenes se pueden rescatar desde esta ruta https://aoecompanion.com/civ-icons/aztecs.png*/ 

export const CivilizationList = () => {
  const [civilizations, setCivilizations] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.aoecompanion.com/civilizations/')
      .then((res) => {
        setCivilizations(res.data)
      })
  }, []);

  return <div>
<ul>
{
civilizations.map(item=>
    <li key={item.id}>{item.name} - {item.short_description} 
    <img alt="" src={"https://aoecompanion.com/"+ item.icon_url}></img> 
    </li>
)}
</ul>
  </div>;
};
