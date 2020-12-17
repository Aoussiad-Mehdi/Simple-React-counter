import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Our function component.
const Component = () =>{
  const [value, setValue] = useState(0);
  const setToZero = ()=>{
    setValue(0);
  }
  return(
    <div className="container">
      <h1>Counter</h1>
      <h2>{value}</h2>
      <div className="buttons">
        <button onClick={()=> setValue(value + 1)}>Increase</button>
        <button onClick={setToZero}>Reset</button>
        <button onClick={()=> setValue(value - 1)}>Decrease</button>
      </div>
    </div>
  )
}

// Rendering the component with the render method.
ReactDOM.render(
  <Component />,
  document.getElementById('root')
);
