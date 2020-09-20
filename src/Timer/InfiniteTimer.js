import React, { Component } from 'react';
import Timer from './Timer';

export default class InfiniteTimer extends Component{
    state = {
        time: this.props.time
    }

    onTick = (time) => {
        if(time >= 0){
            console.log("Залишилось часу: " + time);
        }
    }
    onTimeEnd = () => console.log("Час вийшов!");
    // onTimeEnd = () => {
    //     console.log("Час вийшов!");
    //     this.setState({ time: 5 });
    // }
    // onTimeEnd = () => {
    //     console.log("Час вийшов!");
    //     const time = this.state.time;
    //     this.setState((prevState) => {
    //         return {
    //             time: prevState.time
    //         }
    //     });
    // }
    onTimeStart = (timeLeft) => console.log("Таймер запущено!");
    onTimePause = (timeLeft) => console.log("Таймер на паузі!");
    onTimeChange = (event) => {
        const newTime = event.target.value;
        this.setState({
            time: newTime
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
                <input type="number" min="1" max="100" value={this.state.time} onChange={this.onTimeChange} />   
            </div>
        )
    }
}