import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

import './receiver.sass';
import PasswordInput from '../PasswordInput';

class Receiver extends Component {
    state = {
        color: 'rgba(255,0,50,1)',
        display: 'none',
        found: false,
    }


    componentDidMount() {
        const { point } = this.props;
        this.eventSource = '';

        if(point.repaired == 0) {
            this.listenCoords();
        } else {
            this.setState({
                found:true,
                color: '#25ec25'
            })
        }
    }

    componentWillUnmount(){
        console.log(typeof this.eventSource);

        if(typeof this.eventSource !== 'string') {
            this.eventSource.close();
        }
    }
    listenCoords = () => {
        const url = new URL(process.env.REACT_APP_MERCURE_HUB);
        url.searchParams.append('topic', process.env.REACT_APP_MERCURE_DETECTOR_TOPIC);
        this.eventSource = new EventSource(url, { withCredentials: true });

        this.eventSource.onmessage = (e) => {
            const data = JSON.parse(e.data)

            if(data.type == 'coords'){
                this.displayColor(data);
            } else if (data.type == 'win') {
                this.setState({
                    found: true,
                    display: 'none',
                })
                this.eventSource.close();
            }
        };
    }
    displayColor = (data) => {

        data.r = data.redColor;
        data.g = data.greenColor;
        data.b = 50;
        const display = data.display

        this.setState({
            color: `rgb(${data.r},${data.g},${data.b})`,
            display
        })
    }


    render(){
        const {color, display, found} = this.state;
        return (
            <div className="receiver-page full-machine">
                <div className="machine">
                    <div className={"top " + ( found ? 'found' : '' )}>
                        <div className="leds">
                            <div className="led"></div>
                            <div className="led"></div>
                        </div>
                        <div className="title">
                            TREASURE 72800
                        </div>
                    </div>
                    <div className="screen" style={{ backgroundColor: color }}>
                        <div className="dot" style={{display:display}}></div>
                        { found && <p>Trouvé !</p>}
                    </div>
                    <div className="entre">

                    </div>
                    <div className="bottom">
                        <div className="lock">
                            { !found && <FontAwesomeIcon icon={ faLock} />}
                            { found && <FontAwesomeIcon icon={ faLockOpen} />}
                        </div>
                    </div>
                </div>
                <div className={"drawer" + (found ? ' open' : '')}>
                    <div className="drawer-body">
                        <PasswordInput slug={this.props.slug} />
                    </div>
                    <div className="drawer-front"></div>
                </div>
            </div>
        )
    }
}

export default Receiver;
