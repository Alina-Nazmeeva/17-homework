import React from 'react';
import './App.css';
import Timer from './Timer/Timer';

function App() {
  return (
    <div className="App">
      <Timer  time={5} 
              autostart={true} 
              step={1000}
              onTick={time => console.log("Залишилось часу: " + time)}
              onTimeEnd={() => console.log("Час вийшов!")}
              onTimeStart={(timeLeft) => console.log("Таймер запущено!")}
              onTimePause={(timeLeft) => console.log("Таймер на паузі!")}
      />
      {/* <Timer  time={10} 
              autostart={false} 
              step={2000}
              onTick={time => console.log("Залишилось часу: " + time)}
              onTimeEnd={() => console.log("Час вийшов!")}
      /> */}
    </div>
  );
}

export default App;
