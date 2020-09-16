import React, { Component } from 'react';

export default class Timer extends Component{
    state = {
        time: this.props.time,
        autostart: this.props.autostart,
        step: this.props.step,
        paused: !this.props.autostart
    }

    componentDidMount(){
        this.interval = setInterval(this.decreaseTimer, this.state.step);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    decreaseTimer = () => {
        if(!this.state.paused){           
            this.setState((prevState) => {
                return {
                    time: prevState.time - 1
                }
            });
            this.props.onTick(this.state.time);
            if(this.state.time === 0){
                this.props.onTimeEnd();
                this.setState({
                    time: this.props.time
                })
            }
        }       
    }

    pauseToggle = () => {
        this.state.paused ? this.props.onTimeStart() : this.props.onTimePause();
        this.setState((prevState) => {
            return {
                paused: !prevState.paused
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.pauseToggle}>{this.state.paused ? "Start" : "Pause"}</button>
                <p>Timer: {this.state.time}</p>
            </div>
        )
    }
}