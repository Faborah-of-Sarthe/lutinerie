/**
 * Import
 */
import React, { Component } from 'react';
import axios from 'axios';
import './welcome.sass';

class Welcome extends Component {
    state = {
        step: 1,
        isSending: false,
        input: '',
    }
    step2 = (e) => {
        this.setState(state => ({
            step: 2,
        }));
    }
    handleChange = () => {
        this.setState({input: event.target.value});
    }
    handleSubmit = () => {
        event.preventDefault();
        const { setBureau} = this.props;
        
        const target = `${process.env.REACT_APP_BACK_URL}checkBureau.php`;
        const data = {
            password: this.state.input
        }
        const qs = require('qs');

        this.setState({ isSending: true });

        axios({
            method: 'post',
            url: target,
            data: qs.stringify(data)
        }).then(res => {
            this.setState({
                isSending: false
            });
            if (res.data.error == true) {
                alert(res.data.message);
            }else {
                
                setBureau(res.data.message);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        const { step } = this.state;
        if(step == 1) {
            this.page = 
                <div className="intro">
                    <p>
                        Insatisfaits de leurs conditions de travail, une poignée de lutins du Père Noël a décidé de mettre en péril la livraison des cadeaux 2019. Pour ce faire, ils ont saboté un certain nombre de points stratégiques : points de livraison, entrepôts de stockage, centres de contrôle… 
                    </p>
                    <p>
                        Santa Claus a donc fait appel aux deux meilleurs pôles du Fier Bureau d’Investigation pour rétablir la situation : celui de la Sarthe et celui de la Savoie. Enquêteurs, à vous de jouer ! 
                    </p>
                    <p>
                        Attention : cette mission requiert une grande coopération entre vos deux équipes. Par ailleurs, les lutins rebelles surveillant les réseaux de communication, vous ne pourrez communiquer qu’à travers un canal audio ! 
                    </p>
                    <p>
                        Pour vous identifier, veuillez cliquer sur le bouton ci-dessous et entrer le mot de passe de votre bureau.
                    </p>
                    <button className="button" onClick={this.step2}>S'identifier</button>
                </div>
            
        } else if (step == 2) {
            this.page = 
                <div className="intro">
                    Veuillez entrer le mot de passe propre à votre bureau :     
                    <form className="password-area" onSubmit={this.handleSubmit}>
                        <input type="text" name="name" onChange={this.handleChange} />
                        <input type="submit" value="Envoyer" />
                    </form>
                </div>
            ;
        }
        else {
            this.page ="Ça ne devrait pas passer ici :)";
        }

        return (
            <div className="welcome-page">
                <div className="welcome-wrapper">
                    <h1>La lutinerie de Noël</h1>
                    { this.page }
                </div>
            </div>
        );
    }
}


export default Welcome;