import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/CivilizationList.css'
import {Navbar} from '../components/Navbar'
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

  return (
    <div>    <Navbar/>
    <div className=" d-flex flex-raw flex-wrap justify-content-center">
  
      {
        civilizations.map(item =>
          <card key={item.id} className="d-flex flex-column text-center cardCivilizationList">
          <img className="iconCivilization" alt="icon" src={"https://aoecompanion.com/" + item.icon_url}/>
           <p>{item.name}</p>
           <p>{item.short_description}</p>

          </card>
        )}
    </div>
    </div>)
};
