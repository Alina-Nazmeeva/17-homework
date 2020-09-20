import React from 'react';
import './App.css';
import InfiniteTimer from './Timer/InfiniteTimer';

const timers = [{
  time: 5000,
  autostart: true,
  step: 1000
}, {
  time: 10000,
  autostart: false,
  step: 2000
}, {
  time: 20000,
  autostart: false,
  step: 100
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