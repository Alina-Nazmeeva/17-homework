import React, { Component } from 'react';

export default class Timer extends Component{
    state = {
        time: this.props.time,
        autostart: this.props.autostart,
        step: this.props.step,
        paused: !this.props.autostart
    }

    componentDidMount(){
        this.interval = setInterval(this.decreaseTimer, 1000);
    }

    shouldComponentUpdate(nextProps, nextState){
        return !(nextState.time % (this.state.step / 1000));
    }

    componentDidUpdate(){
        this.props.onTick(this.state.time);
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
            if(this.state.time === 0){
                this.props.onTimeEnd();
                setTimeout(() => {
                    this.setState({
                        time: this.props.time                  
                    })
                }, 1000);
            }
        }       
    }

    pauseToggle = () => {
        this.state.paused ? this.props.onTimeStart() : this.props.onTimePause();
        this.setState((prevState) => {
            return {
                paused: !prevState.paused
            }
        });
    }
    
    formatTimer = () => {
        const time = this.state.time;
        const seconds = time % 60;
        const minutes = (time - seconds) / 60;
        const result = ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
        return result;
    }

    render(){
        return(
            <div className="timer">
                <span>{this.formatTimer()}</span>
                <button onClick={this.pauseToggle} 
                        style={{backgroundColor: `${this.state.paused ? "rgb(10, 236, 10)" : "yellow"}`}}>
                            {this.state.paused ? "Start" : "Pause"}
                </button>
                <div className="scale-wrapper" style={{backgroundColor: `${this.state.time === 0 ? "red" : "white"}`}}>
                    <div className="scale" style={{width: `${100/this.props.time*this.state.time}%`}}></div>
                </div>
            </div>
        )
    }
}