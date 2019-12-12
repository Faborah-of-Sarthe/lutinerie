
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import store  from 'src/store';
import { updatePoints } from 'src/store/reducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Welcome from 'src/containers/Welcome';
import Dashboard from 'src/containers/Dashboard';
import PointPage from 'src/components/PointPage';
import { setBureau } from '../../store/reducer';


class App extends Component {
    state = {
        loading: true
    }
    componentDidMount(){
        axios.get(`${process.env.REACT_APP_BACK_URL}getPoints.php`)
        .then((response) => {
            store.dispatch(updatePoints(response.data));
            this.setState({
                loading:false
            })
        })
        .catch((error) => {
          alert(error);
        });

        let cookie = new Cookies;
        let bureau = cookie.get('bureau');
        if(bureau){
            store.dispatch(setBureau(bureau));
        }
    }
    render() {
        const {bureau} = this.props;
        const {loading} = this.state;

        return (
            <BrowserRouter>
               { !loading && <main>
                    <ToastContainer autoClose={4000} />
                    <Switch>
                    <Route exact path="/">
                        { !bureau && <Welcome /> }
                        { bureau && <Dashboard /> }
                    </Route>
                    {/* on crée un composant intermédiaire via la prop render avant d'appeler le notre */}
                    <Route
                        path="/point/:id"
                        render={({history, match, location}) => {
                        const { id } = match.params;
                        return <PointPage slug={id} store={store} />
                        }}
                    />
                    <Route>
                        <Error />
                    </Route>
                    </Switch>
                </main> }
            </BrowserRouter>
        )
    }
}

export default App;
