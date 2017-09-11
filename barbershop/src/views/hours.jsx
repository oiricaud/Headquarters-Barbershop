import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
const styles = theme => ({

});

class Hours extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div>

            </div>
        );
    }
}


Hours.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hours);