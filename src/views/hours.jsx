import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {CardActions, CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";
import Card from "../../node_modules/material-ui/Card/Card";
import {Button, Grid, Paper, Typography} from "../../node_modules/material-ui/index";
// using ES modules
import Media from 'react-media'

// using CommonJS modules
var MediaReact = require('react-media')

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: theme.mixins.gutters({
        backgroundColor: 'darkslategray',
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 8,
        marginLeft: theme.spacing.unit * 8,
        marginRight: theme.spacing.unit * 8,
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
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },

    flex: {
        flex: 1,
        fontWeight: 100,
        margin: 20,
        color: '#FAFAFA'
    },
    header:{
        fontWeight: 300,
        fontSize: 30,
        color: '#FAFAFA'
    }
});

class Hours extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <MediaReact query="(max-width: 599px)">
                    {matches => matches ? (
                        <div>
                            <p>The document is less than 600px wide.</p>
                        </div>

                    ) : (
                        <div>
                        <p>The document is at least 600px wide.</p>
                            <Paper className={classes.paper} elevation={10}>
                                <CardMedia
                                    className={classes.media}
                                    image={process.env.PUBLIC_URL + 'banner/clock.jpg'}
                                    title="Mountains banner"
                                />
                                <div>
                                    <Typography type="title" className={classes.header}>  Home </Typography>
                                </div>
                                <div  className={classes.hours}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={6}>
                                            <Typography type="title1" className={classes.flex}> Monday </Typography>
                                            <Typography type="title1" className={classes.flex}> Tuesday </Typography>
                                            <Typography type="title1" className={classes.flex}> Wednesday </Typography>
                                            <Typography type="title1" className={classes.flex}> Thursday </Typography>
                                            <Typography type="title1" className={classes.flex}> Friday </Typography>
                                            <Typography type="title1" className={classes.flex}> Saturday </Typography>
                                            <Typography type="title1" className={classes.flex}> Sunday </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography type="title1" className={classes.flex}> 10am - 6pm </Typography>
                                            <Typography type="title1" className={classes.flex}> 10am - 6pm </Typography>
                                            <Typography type="title1" className={classes.flex}> 10am - 6pm </Typography>
                                            <Typography type="title1" className={classes.flex}> 10am - 6pm </Typography>
                                            <Typography type="title1" className={classes.flex}> 10am - 6pm </Typography>
                                            <Typography type="title1" className={classes.flex}> 10am - 6pm </Typography>
                                            <Typography type="title1" className={classes.flex}> 10am - 6pm </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Paper>
                        </div>
                    )}
                </MediaReact>
            </div>
        );
    }
}


Hours.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hours);