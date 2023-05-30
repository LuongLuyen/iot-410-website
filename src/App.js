import {useEffect,useState} from 'react'
import axios from 'axios'
import Content from './Content'
import './App.css';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get('https://server-iot-410.onrender.com/home-bong')
    .then((response) => {
        setData(response.data)
    })
  }, []) 
if (!data) 
  return (
  <div>
      <h1 className='title'> PHÒNG 410</h1>
    <div className='loadding'>
      <div className="loader"></div>
      <h1>Loadding...!</h1>
    </div>
  </div>
  )

  return (
    <div>
      <Content props= {data}/>
    </div>
    
  );
}

export default App;
