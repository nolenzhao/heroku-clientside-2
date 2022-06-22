import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  
  const [data, setData] = useState({});


  useEffect( () =>{
    fetch("https://heroku-api-test-2.herokuapp.com/gallery/1")
    .then(raw => raw.json())
    .then(result =>{
      setData(result);
    })
  },[])

  return (
    <div className="App">
      
      Up n' running
      <div>
      {data.alt_text}
    </div>

    <img src = {data.img_url}/>
    </div>
  );
}

export default App;
 /*
    <div>
      {data.alt_text}
    </div>

    <img src = {data.img_url}/>
    
*/