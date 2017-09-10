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
    h1:{
        weight: 10,
        backgroundColor: '#090'
    },
    media: {
        height: 300,
        marginBottom:20,
    },
    paper: theme.mixins.gutters({
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    }),
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    flexGrow: {
        flex: '1 1 auto',
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
                <div>
                    <Paper className={classes.paper} elevation={10}>
                        <CardMedia
                            className={classes.media}
                            image={process.env.PUBLIC_URL + 'banner/mountains.jpg'}
                            title="Contemplative Reptile"
                        />
                        <div className="headliner">
                            <h1>   Headquarters Hair & Apparel </h1>
                        </div>
                        <h4>   145 S. Mesa Hills </h4>
                        <Typography type="body2" component="p">
                            Look your best! Headquarters Hair & Apperal is a family owned business in El Paso TX. We are
                            located in the west side of town and are always making our customers happy. We have been opened
                            for about 5 years and have had many of our clients from milatary base. We are constantly getting
                            great reviews. We are not limited to only haircuts for adults, children or our seniors but we also
                            offer great massage and offer hair coloring at your pleasure.
                        </Typography>
                        <div>
                            <MyTiles>
                            </MyTiles>
                        </div>
                    </Paper>
                </div>
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