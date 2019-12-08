
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import store  from 'src/store';
import { updatePoints } from 'src/store/reducer'



import Dashboard from 'src/containers/Dashboard';


class App extends Component {

    componentDidMount(){
        
        axios.get(`${process.env.REACT_APP_BACK_URL}getPoints.php`)
        .then((response) => {
            store.dispatch(updatePoints(response.data));
        })
        .catch((error) => {
          alert(error);
        });
    }
    render() {
        return (
            <BrowserRouter>
                <main>
                    <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    {/* on crée un composant intermédiaire via la prop render avant d'appeler le notre */}
                    <Route
                        path="/point/:id"
                        render={({history, match, location}) => {
                        const { id } = match.params;
                        return <PointPage id={id} />
                        }}
                    />
                    <Route>
                        <Error />
                    </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
}

export default App;