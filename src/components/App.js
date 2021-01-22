import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Home';
import '../css/App.css';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/careers' component={() => { 
                        window.open('https://www.notion.so/Careers-at-Everforex-b87bb67bf72542b1a726b32cc83c6c77', '_blank');
                        window.history.back();
                        return null;
                    }}/>
                    <Route path="/legal" exact component={() => {
                        window.open('https://www.notion.so/Legal-Document-d03579edc1ab4729be08111e88090cd5', '_blank'); 
                        window.history.back();
                        return null;
                    }} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;