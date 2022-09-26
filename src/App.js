import React, { useState } from 'react';

function App() {

  const [tempValue, setTempValue] = useState(10);
  

  return (
    <div className="App">

      <div className='app-container'>

        <div className='temperature-display-container'>

          <div className={`temperature-display ${tempValue < 15 ? "cold" : "hot"}`}>{tempValue}°C</div>

        </div>

        <div className='button-container'>

          <button onClick={()=>setTempValue(tempValue + 1)} disabled={tempValue >= 30 }>+</button>
          <button onClick={()=>setTempValue(tempValue - 1)} disabled={tempValue <= 0 }>-</button>

        </div>

      </div>

    </div>
  );
}

export default App;
