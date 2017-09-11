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
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    appBar: {
        height: 60,
    },
    media: {
        height: 300,
        marginBottom:20,
        marginTop:7,
    },
});

class Hours extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="https://unsplash.it/2048/634"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>Monday</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>10am - 6pm </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>Tuesday</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>10am - 6pm</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>Wednesday</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>10am - 6pm</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>Thursday</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>10am - 6pm</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>Friday</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>10am - 6pm</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>Saturday</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>10am - 6pm</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>Sunday</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>Open - Close </Paper>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}


Hours.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hours);