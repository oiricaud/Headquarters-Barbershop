import React, { Component } from 'react';
import './App.css'
import PropTypes from 'prop-types';
import {BrowserRouter, Route } from 'react-router-dom'
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import MyTiles from './components/tiles.jsx';
import MyFooter from './components/footer.jsx';
import HomeView from './views/home.jsx';
import MySideBar from './components/sidebar.jsx';

const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%',
        backgroundColor:'#fff',
    },
    appBar: {
        height: 60,
    },

});

class App extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <BrowserRouter>
            <div className={classes.root}>
                <MySideBar>
                </MySideBar>

                    <Route exact path='/' render={() => <HomeView>  </HomeView>} />
                    <Route
                        exact
                        path='/call'
                        render={() => <h1>  Call </h1>}
                    />
                    <Route
                        exact
                        path='/reviews'
                        render={() => <h1> Reviews </h1>}
                    />
                    <Route
                        exact
                        path='/mail'
                        render={() => <h1> Mail </h1>}
                    />
                    <Route
                        exact
                        path='/directions'
                        render={() => <h1> Directions </h1>}
                    />

                <MyFooter>
                </MyFooter>
            </div>
        </BrowserRouter>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);