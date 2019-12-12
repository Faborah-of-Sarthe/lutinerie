import React, { Component } from 'react';
import './detector.sass';
import flower from './img/flower.svg';
import grassImg from './img/grass.svg';
import axios from 'axios';

class Detector extends Component {
    state = {
        left: Math.round(Math.random() *90),
        top: Math.round(Math.random() *90),
        display: 'none',
        gameFinished: false,
        password: 'Point déverrouillé',
    }

    componentDidMount(){
        const { point } = this.props;

        if(point.repaired == 0) {
            document.addEventListener('mousemove', this.sendPosition);
        }
        else {
            this.setState({
                gameFinished: true
            })
        }
        
        this.setState({
            flowers: this.getFlowers(),
            grass: this.getGrass(),
        })
        
      
    }
    
    componentWillUnmount(){
        document.removeEventListener('mousemove', this.sendPosition);
    }
    sendPosition = (event) => {
        if (this.state.gameFinished)
            return 

        const { display } = this.state;
        const targetX = this.tresor.getBoundingClientRect().left + (this.tresor.offsetWidth / 2);
        const targetY = this.tresor.getBoundingClientRect().top + (this.tresor.offsetHeight / 2);
        

        let resultX = Math.round(event.clientX * 255 / targetX);
        resultX = (resultX > 255) ? 255 - (resultX - 255) : resultX;

        let resultY = Math.round(event.clientY * 255 / targetY);
        resultY = (resultY > 255) ? 255 - (resultY - 255) : resultY;

        let greenColor = Math.max(0, Math.round((resultX + resultY) / 2));


        let redColor = 255 - greenColor;
        const data = {
            type: 'coords',
            greenColor,
            redColor,
            display
        };

        this.sendData(data);
        
    }
    handleClick = (e) =>  {

        const target = `${process.env.REACT_APP_BACK_URL}getPointPassword.php`;
        const qs = require('qs');
        const data = {
            slug: this.props.slug
        }
        axios({
            method: 'post',
            url: target,
            data: qs.stringify(data)
        }).then(res => {
            this.setState({
                password: res.data,
                gameFinished: true

            });
            const data = {
                type: 'win'
            }
            this.sendData(data);
            
        })
        .catch(function (error) {
        console.log(error);
        });
        
        
    }
    sendData = (data) =>  {
        const http = require('http');
        const querystring = require('querystring');
        const postData = querystring.stringify({
            topic: process.env.REACT_APP_MERCURE_DETECTOR_TOPIC,
            data: JSON.stringify(data),
        });
        
        const req = http.request({
            hostname: 'localhost',
            port: '3000',
            path: '/.well-known/mercure',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '+ process.env.REACT_APP_MERCURE_TOKEN,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData),
                
            },
        });
        req.write(postData);
        req.end();
    }
    hoverTresor = (e) => () => {
        const display = (e) ? 'block' : 'none';
        
        this.setState({
            display
        })
    }
    getFlowers = () => {
        const flowersNb = Math.round(Math.random() * (35 - 10) +10);
        const flowers = [];
        let i = 1;
        while (i < flowersNb) {
            flowers.push(<img className="flower" src={flower} style={{
                left: Math.round(Math.random() *90) + '%',
                top: Math.round(Math.random() *90) + '%',
            }}></img>);
            i++;
        }
        
        return flowers;
    }
    getGrass = () => {
        const grassNb = Math.round(Math.random() * (50 - 30) +30);
        const grass = [];
        let i = 1;
        while (i < grassNb) {
            grass.push(<img className="grass" src={grassImg} style={{
                left: Math.round(Math.random() *90) + '%',
                top: Math.round(Math.random() *90) + '%',
            }}></img>);
            i++;
        }
        
        return grass;
    }
    render(){
        const {left, top, flowers, grass, password, gameFinished} = this.state;

        return (
                <div className='detector-page'>
                    <div className="game">
                        {flowers}
                        {grass}
                        <div className="tresor"
                            onClick={this.handleClick}
                            onMouseEnter={this.hoverTresor(true)}
                            onMouseLeave={this.hoverTresor(false)}
                            style={{
                                left: `${left}%` ,
                                top: `${top}%`
                            }}
                            ref={(element) => {
                                this.tresor = element;
                            }}
                        ></div>
                        <div className={"password" + ( gameFinished ? ' found' : '') }>{password}</div>
                    </div>
                </div>
            )
        }
    }
    
    export default Detector; 