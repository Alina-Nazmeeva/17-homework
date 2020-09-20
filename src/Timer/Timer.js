import React, { Component } from 'react';

export default class Timer extends Component{
    state = {
        time: this.props.time,
        autostart: this.props.autostart,
        step: this.props.step,
        paused: !this.props.autostart
    }

    componentDidMount(){
        let interval = 1000;
        if(this.state.step < 1000){
            interval = this.state.step;
        }
        this.interval = setInterval(this.decreaseTimer, interval);
    }

    shouldComponentUpdate(nextProps, nextState){   
        return !(nextState.time % this.state.step);
    }

    componentDidUpdate(){
        this.props.onTick(this.state.time / 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    decreaseTimer = () => {
        if(!this.state.paused){   
            this.setState((prevState) => {
                if(this.state.step >= 1000){
                    return {
                        time: prevState.time - 1000
                    }
                } else {
                    return {
                        time: prevState.time - this.state.step
                    }
                }
                
            });
            if(this.state.time === 0){
                this.props.onTimeEnd();
                setTimeout(() => {
                    this.setState({
                        time: this.props.time                  
                    })
                }, this.state.step >= 1000 ? 1000 : this.state.step);
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
        const time = this.state.time / 1000;
        const sec = time % 60;
        const min = (time - sec) / 60;
        return `${min > 9 ? min : "0" + min} : ${sec > 9 ? sec : "0" + sec}`;
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