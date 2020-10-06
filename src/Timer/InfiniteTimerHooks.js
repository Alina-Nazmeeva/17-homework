import React, { useState } from 'react';
import TimerHooks from './TimerHooks';

function InfiniteTimer(props){
    const [time, setTime] = useState(props.time);

    const onTick = (time) => {
        if(time >= 0){
            console.log("Залишилось часу: " + time);
        }
    }
    const onTimeEnd = () => console.log("Час вийшов!");
    const onTimeStart = () => console.log("Таймер запущено!");
    const onTimePause = () => console.log("Таймер на паузі!");
    const onTimeChange = (event) => {
        const newTime = event.target.value;
        setTime(newTime * 1000);
    }
    
    return (
        <div className="infinite-timer">
            <TimerHooks time={time} 
                        autostart={props.autostart}
                        step={props.step}
                        onTick={onTick}
                        onTimeEnd={onTimeEnd}
                        onTimeStart={onTimeStart}
                        onTimePause={onTimePause}     
            />
            <input type="number" min="1" max="100" value={time / 1000} onChange={onTimeChange} />   
        </div>
    )
}

export default InfiniteTimer;