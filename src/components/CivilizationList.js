import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/CivilizationList.css'
import RingLoader
from "react-spinners/RingLoader";

export const CivilizationList = () => {
  const [civilizations, setCivilizations] = useState([]);
  const [civilizationsUnique, setCivilizationsUnique] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    axios
      .get('https://api.aoecompanion.com/civilizations/')
      .then((res) => {
        setCivilizations(res.data)
        setLoading(false)
      })
      
  }, []);

  useEffect(() => {
    
    axios
      .get('https://api.aoecompanion.com/unit-lines')
      .then((res) => {
       const cleanRes= res.data.filter(item=>item.civilization !=null)
       setCivilizationsUnique(cleanRes) 

      })
      
  }, []);

  return (
      <div className=" d-flex flex-wrap justify-content-center">
        {!loading&&
          civilizations.map(item =>
            <div  key={item.id} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <h1>{item.name}</h1>
                  <img className="iconCivilization"  src={"https://aoecompanion.com/" + item.icon_url} alt="Avatar" />
                </div>
                <div className="flip-card-back"> 
                  <p>{item.short_description}</p>
                  {civilizationsUnique.map(civ=>civ.civilization.name==item.name &&
                  <div key={civ.id}>
                  <p className="my-auto">{civ.name.replace('Line','')}</p> 
                  <img className="iconCivilizationUnit" src={"https://aoecompanion.com/icons/" + civ.units[0].icon_url } />
                  </div>
                  )
                  }
                </div>
              </div>
            </div>
          )}
          {loading&&
          <div className="d-flex flex-column justify-content-center align-items-center">
          <RingLoader color={"white"} loading={loading} size={150} />
          <div><h3 className=" text-center">Loading Civilizations</h3></div>
          </div>}
      </div>)
};
//       <div className=" d-flex flex-raw flex-wrap justify-content-center">

//         {
//           civilizations.map(item =>
//             <div key={item.id} className="d-flex flex-column text-center cardCivilizationList">
//               <img className="iconCivilization" alt="icon" src={"https://aoecompanion.com/" + item.icon_url} />
//               <p>{item.name}</p>
//               <p>{item.short_description}</p>

//             </div>
//           )}
//       </div>
//     </div>)
// };
