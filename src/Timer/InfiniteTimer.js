import React, { Component } from 'react';
import Timer from './Timer';

class InfiniteTimer extends Component{
    state = {
        time: this.props.time
    }

    onTick = (time) => {
        if(time >= 0){
            console.log("Залишилось часу: " + time);
        }
    }
    onTimeEnd = () => console.log("Час вийшов!");
    onTimeStart = () => console.log("Таймер запущено!");
    onTimePause = () => console.log("Таймер на паузі!");
    onTimeChange = (event) => {
        const newTime = event.target.value;
        this.setState({
            time: newTime * 1000
        });
    }
    
    render(){
        return (
            <div className="infinite-timer">
                <Timer  time={this.state.time} 
                        autostart={this.props.autostart}
                        step={this.props.step}
                        onTick={this.onTick}
                        onTimeEnd={this.onTimeEnd}
                        onTimeStart={this.onTimeStart}
                        onTimePause={this.onTimePause}     
                />
                <input type="number" min="1" max="100" value={this.state.time / 1000} onChange={this.onTimeChange} />   
            </div>
        )
    }
}

export default InfiniteTimer;