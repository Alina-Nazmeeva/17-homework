(this["webpackJsonp17-homework"]=this["webpackJsonp17-homework"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),s=(n(12),n(13),n(1)),c=n(2),u=n(4),m=n(3),l=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={time:t.props.time,autostart:t.props.autostart,step:t.props.step,paused:!t.props.autostart},t.decreaseTimer=function(){t.state.paused||(t.setState((function(t){return{time:t.time-1}})),0===t.state.time&&(t.props.onTimeEnd(),setTimeout((function(){t.setState({time:t.props.time})}),1e3)))},t.pauseToggle=function(){t.state.paused?t.props.onTimeStart():t.props.onTimePause(),t.setState((function(t){return{paused:!t.paused}}))},t.formatTimer=function(){var e=t.state.time,n=e%60;return("0"+(e-n)/60).slice(-2)+" : "+("0"+n).slice(-2)},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.decreaseTimer,1e3)}},{key:"shouldComponentUpdate",value:function(t,e){return!(e.time%(this.state.step/1e3))}},{key:"componentDidUpdate",value:function(){this.props.onTick(this.state.time)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return o.a.createElement("div",{className:"timer"},o.a.createElement("span",null,this.formatTimer()),o.a.createElement("button",{onClick:this.pauseToggle,style:{backgroundColor:"".concat(this.state.paused?"rgb(10, 236, 10)":"yellow")}},this.state.paused?"Start":"Pause"),o.a.createElement("div",{className:"scale-wrapper",style:{backgroundColor:"".concat(0===this.state.time?"red":"white")}},o.a.createElement("div",{className:"scale",style:{width:"".concat(100/this.props.time*this.state.time,"%")}})))}}]),n}(a.Component),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={time:t.props.time},t.onTick=function(t){t>=0&&console.log("\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044c \u0447\u0430\u0441\u0443: "+t)},t.onTimeEnd=function(){return console.log("\u0427\u0430\u0441 \u0432\u0438\u0439\u0448\u043e\u0432!")},t.onTimeStart=function(t){return console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e!")},t.onTimePause=function(t){return console.log("\u0422\u0430\u0439\u043c\u0435\u0440 \u043d\u0430 \u043f\u0430\u0443\u0437\u0456!")},t.onTimeChange=function(e){var n=e.target.value;t.setState({time:n})},t}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"infinite-timer"},o.a.createElement(l,{time:this.state.time,autostart:this.props.autostart,step:this.props.step,onTick:this.onTick,onTimeEnd:this.onTimeEnd,onTimeStart:this.onTimeStart,onTimePause:this.onTimePause}),o.a.createElement("input",{type:"number",min:"1",max:"100",value:this.state.time,onChange:this.onTimeChange}))}}]),n}(a.Component),h=[{time:5,autostart:!0,step:1e3},{time:10,autostart:!0,step:2e3}];var d=function(){return o.a.createElement("div",{className:"App"},h.map((function(t,e){return o.a.createElement(p,{time:t.time,autostart:t.autostart,step:t.step,key:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.24613341.chunk.js.map