import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Residentscard from './assets/components/ResidentInfo'
import ResidentInfo from './assets/components/ResidentInfo'

function App() {
  const [count, setCount] = useState(0)
  const [location, SetLocation] = useState({})
  const randomLocation = Math.floor(Math.random() * 126) +1
  const [serchIdLocation , SetSerchIdLocation ] = useState ("");
  

  useEffect ( () => {
    axios.get( `https://rickandmortyapi.com/api/location/${randomLocation}`)
    .then(res => SetLocation(res.data))
  },[]);
console.log(location);

 const serchLocation = () => {
  if (Number(serchIdLocation)< 126)
  axios.get( `https://rickandmortyapi.com/api/location/${serchIdLocation}`)
  .then(res => SetLocation(res.data));
  else (alert("Elige un id Hasta el 126")) 
 }

  return (
    <div className="App">
      <h1>Rick and Morthy App</h1>
      <div className='container-Serch'>
      <input
       type="text"
       placeholder='type location of Rick And Morty'
       value={serchIdLocation}
       onChange={e =>SetSerchIdLocation (e.target.value)}
       
       />
      <button onClick={serchLocation}>Serch Location for number</button>

      </div>
      <h2>{location.name} </h2>
      <div className='container-info'>
      <p>Tipe: {location.type} </p>
      <p>Dimension: {location.dimension} </p>
      <p>Residentes :{location.residents?.length} </p>
      </div>
      <div className='infoResident'>
      <ul>
      {
      location.residents?.map (resident => (
        < ResidentInfo resident={resident} key={resident} />


      ))
      
      }
      </ul>
      </div>
      
      
    </div>
  )
}

export default App
