import React, { useState, useEffect } from 'react';

function Timer(props){
    
    const[time, setTime] = useState(props.time);
    const[autostart, setAutostart] = useState(props.autostart);
    const[step, setStep] = useState(props.step);
    const[paused, setIsPaused] = useState(!props.autostart);

    useEffect(() => {
        //componentDidMount
        const intervalID = setInterval(decreaseTimer, step);
        //componentDidUpdate
        props.onTick(time / 1000);
        return () => {
            //componentWillUnmount
            clearInterval(intervalID);
        }
    })

    const decreaseTimer = () => {
        if(!paused){
            setTime(time - step);
            if(time === 0){
                props.onTimeEnd();
                setTime(props.time);
            }
        }       
    }

    const pauseToggle = () => {
        paused ? props.onTimeStart() : props.onTimePause();
        setIsPaused(!paused)
    }
    
    const formatTimer = () => {
        const timeInSeconds = time / 1000;
        const sec = timeInSeconds % 60;
        const min = (timeInSeconds - sec) / 60;
        return `${min > 9 ? min : "0" + min} : ${sec > 9 ? sec : "0" + sec}`;
    }

    return(
        <div className="timer">
            <span>{formatTimer()}</span>
            <button onClick={pauseToggle} 
                    style={{backgroundColor: `${paused ? "rgb(10, 236, 10)" : "yellow"}`}}>
                        {paused ? "Start" : "Pause"}
            </button>
            <div className="scale-wrapper" style={{backgroundColor: `${time === 0 ? "red" : "white"}`}}>
                <div className="scale" style={{width: `${100 / props.time * time}%`}}></div>
            </div>
        </div>
    )
}

export default Timer;