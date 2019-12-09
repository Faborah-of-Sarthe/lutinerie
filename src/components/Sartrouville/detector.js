import React, { Component } from 'react';

class Detector extends Component {
    componentDidMount(){
        document.addEventListener('mousemove', this.sendPosition);
    }

    componentWillUnmount(){
        document.removeEventListener('mousemove', this.sendPosition);
    }
    sendPosition(event){
        
        const data = {
            x: event.clientX,
            y: event.clientY
        };
        const http = require('http');
        const querystring = require('querystring');
        const postData = querystring.stringify({
            'topic': process.env.REACT_APP_MERCURE_DETECTOR_TOPIC,
            'data': JSON.stringify(data),
        });
        console.log(`Bearer ${process.env.REACT_APP_MERCURE_TOKEN}`);
        
        const req = http.request({
            hostname: 'localhost',
            port: '3000',
            path: '/.well-known/mercure',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_MERCURE_TOKEN}`,
                // the JWT must have a mercure.publish key containing an array of targets (can be empty for public updates)
                // the JWT key must be shared between the hub and the server
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData),
                'Access-Control-Allow-Headers': '*',

            }
        }, /* optional response handler */);
        req.write(postData);
        req.end();
    }

    render(){
        return (
            <p>Coucou</p>
        )
    }
}

export default Detector; 