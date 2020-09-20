import React from 'react';
import './App.css';
import InfiniteTimer from './Timer/InfiniteTimer';

const timers = [{
  time: 5,
  autostart: true,
  step: 1000
}, {
  time: 10,
  autostart: true,
  step: 2000
}];

function App() {
  return (
    <div className="App">
      {timers.map((timer, index) => (
        <InfiniteTimer  time={timer.time}
                        autostart={timer.autostart}
                        step={timer.step}
                        key={index}
        />
      )
      )}
    </div>
  );
}

export default App;