import React, { Component } from 'react';
import './App.css'
import PropTypes from 'prop-types';
import {BrowserRouter, Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import HomeView from './views/home.jsx';
import HoursView from './views/hours.jsx';
import DirectionsView from './views/directions.jsx';
import MySideBar from './components/sidebar.jsx';
import MyFooter from './components/footer.jsx';
import Hat from "react-hat";
import Helmet from 'react-helmet'

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
                <Helmet
                    meta={[
                        {"property": "og:type", "content": "video.other"},
                        {"property": "og:image", "content": "https://www.w3schools.com/css/trolltunga.jpg"},
                        {"property": "og:title", "content": "My Title"},
                        {"property": "og:url", "content": "https://www.afnity.com/video/155"},
                        {"property": "og:description", "content": "some discription of the shared    content"}
                    ]}
                />

                <MySideBar>
                </MySideBar>
                <Route exact path='/' render={() => <HomeView> </HomeView>} />
                <Route
                    exact
                    path='/hours'
                    render={() => <HoursView> </HoursView>}
                />
                <Route
                    exact
                    path='/call'
                    render={() => <h1> Call </h1>}
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
                    render={() => <DirectionsView> </DirectionsView>}
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