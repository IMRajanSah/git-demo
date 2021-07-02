import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment=()=>{
    setCount(count+1)
  }
  
  const decrement=()=>{
    if(count>0)
    setCount(count-1);
  }
  const Zero=()=>{
    setCount(0)
  }
  const mystyle={
    fontSize:30
  }
  return (
    <div>
      <br></br>
      <center><h2>Counter App</h2>
      <p style={mystyle}>{count}</p>
    <button onClick={ increment}>Increase Me</button>&nbsp;&nbsp;
    <button onClick={decrement}>Decrease Me</button>&nbsp;&nbsp;
    <button onClick={Zero}>Set Me Zero</button></center>
    </div>
  );
}

export default App;
