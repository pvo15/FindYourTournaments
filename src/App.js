import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';


import { fetchTournaments } from './actions/Tournaments';

import {
    Main,
} from './containers';

import './App.scss';


@withRouter
@connect(null, {
  fetchTournaments,
})
export default class App extends PureComponent {
    componentWillMount(){
       // this.props.fetchTournaments();
    }
    render() {
        return (
            <article>
                <Switch>
                    <Route
                      exact
                      path="/"
                      component={Main}
                    />
                </Switch>

            </article>
        );
    }
}
