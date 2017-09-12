import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {CardActions, CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";
import Card from "../../node_modules/material-ui/Card/Card";
import {Button, Grid, Paper, Typography} from "../../node_modules/material-ui/index";

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: theme.mixins.gutters({
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 6,
        marginLeft: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit * 6,
    }),
    appBar: {
        height: 60,
    },
    media: {
        height: 300,
        marginBottom:20,
        marginTop:7,
    },
    hours:{
        textAlign: 'center',
    },
    container:{
    }
});

class Hours extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={10}>
                    <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + 'banner/clock.jpg'}
                        title="Mountains banner"
                    />
                    <div>
                        <h1>  Headquarters Hair & Apparel </h1>
                    </div>
                    <h4>  Hours </h4>
                    <div id="hours">
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <h4> Monday </h4>
                                    <h4> Tuesday </h4>
                                    <h4> Wednesday </h4>
                                    <h4> Thursday </h4>
                                    <h4> Friday </h4>
                                    <h4> Saturday </h4>
                                    <h4> Sunday </h4>
                                </Grid>
                                <Grid item xs={6}>
                                    <h4> 10am - 6pm </h4>
                                    <h4> 10am - 6pm </h4>
                                    <h4> 10am - 6pm </h4>
                                    <h4> 10am - 6pm </h4>
                                    <h4> 10am - 6pm </h4>
                                    <h4> 10am - 6pm </h4>
                                    <h4> 10am - 6pm </h4>
                                </Grid>
                            </Grid>
                    </div>
                </Paper>
            </div>
        );
    }
}


Hours.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hours);