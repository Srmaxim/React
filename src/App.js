import React, {useState} from 'react'
import "./App.css";

const App = () => {
  const [data, setData] = useState("srmaxim")

  function update(){
    setData("subscribe")

  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={update}>update</button>

    </div>
  )
}

export default App