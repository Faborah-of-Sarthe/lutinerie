import React, { Component } from 'react';

import './receiver.sass';

class Receiver extends Component {
    constructor() {
        super();
        const url = new URL(process.env.REACT_APP_MERCURE_HUB);
        url.searchParams.append('topic', process.env.REACT_APP_MERCURE_DETECTOR_TOPIC);
        const eventSource = new EventSource(url);
        
        eventSource.onmessage = (e) => {
            this.displayColor(e.data);
        };

        this.color = "rgba(0,0,0,1)";
    }

    displayColor = (data) => {
        console.log(data);
        data.r = 255;
        data.g = 0;
        data.b = 0;
        this.color = "rgb("+data.r+","+data.g+","+data.b+")";
    }
            

    render(){
        return (
            <div className="screen" style={{ backgroundColor: this.color }}></div>
        )
    }
}

export default Receiver;