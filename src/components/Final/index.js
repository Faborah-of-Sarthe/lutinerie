import React, { Component } from 'react';
import { sendGuilty } from '../../lib/dataSend';
import './final.sass'


class Final extends Component {
    state = { input: '' }
    handleSubmit = () => {
        event.preventDefault();
        const data = {
          guilty: this.state.input
        }
    
        sendGuilty(data, `${process.env.REACT_APP_BACK_URL}checkGuilty.php`);
    }
    handleChange = (event) => {
        this.setState({input: event.target.value});
    }
    
    render() { 
        const {input} = this.state;
        return ( 
            <div className="overlay">
                <div className="final-question-wrapper">
                    <h1>Bravo, vous avez déverrouillé tous les points !</h1>
                    <div className="but">
                        <p>
                            Mais il vous reste encore un petit détail à régler : qui est le cerveau de cette Lutinerie ? Le malandrin a malencontreusement laissé plusieurs indices sur son identité. Les avez-vous découverts ?
                        </p>
                        <p>
                            Si oui, indiquez ci-dessous le nom de cette facétieuse créature. Sinon, vous pouvez encore chercher !
                        </p>
                    </div>
                    <div className="form-coupable-wrapper">
                        <form className="password-zone" onSubmit={this.handleSubmit}>
                            <div className="coupable">
                                Le coupable est :
                            </div>
                            <input type="text" className="password" name="name" onChange={this.handleChange} />
                            <input type="submit" className="button check-btn dark" value="Envoyer" />
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
 
export default Final;