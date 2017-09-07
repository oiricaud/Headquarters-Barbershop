// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor:'#24292e',
        color:'#fff',
        textAlign: 'center',
    },
});

function Footer(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
           Headquarters Hair & Apperal 145. S. Mesa Hills El Paso TX 79902
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);