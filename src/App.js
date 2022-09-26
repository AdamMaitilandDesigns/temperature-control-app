import React, { useState } from 'react';

function App() {

  const [tempValue, setTempValue] = useState(0);
  const [tempColor, setTempColor] = useState('cold');



  const inTemp = () => {

    if (tempValue === 30) return;

    if (tempValue < 14) {

      setTempColor('cold')


    } else {

      setTempColor('hot')

      console.log(tempValue)

    }

    setTempValue(tempValue + 1)

  }


  const dTemp = () => {

    if (tempValue === 0) return;


    if (tempValue > 15) {

      setTempColor('hot')

    } else {

      setTempColor('cold')

    }

    setTempValue(tempValue - 1)

  }


  return (
    <div className="App">

      <div className='app-container'>

        <div className='temperature-display-container'>

          <div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>

        </div>

        <div className='button-container'>

          <button onClick={inTemp}>+</button>
          <button onClick={dTemp}>-</button>

        </div>

      </div>

    </div>
  );
}

export default App;
