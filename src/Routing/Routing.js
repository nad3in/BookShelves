import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchingContanierConnected from '../Searching/SearchingContainer'
import ShelvesConnected from '../Shelves/Shelves';
class Routing extends Component {
    render () {
        return (
            <Router>
            <Switch>
                <Route path="/" render={() => <ShelvesConnected />} exact />
                <Route path="/search" render={() => <SearchingContanierConnected/>}
                />
            </Switch>
        </Router>
        )
    }
}

export default Routing