import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import MyTiles from '../components/tiles.jsx';

const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%',
        backgroundColor: '#24292e',
    },
    media: {
        height: 300,
        marginBottom:20,
        marginTop:7,
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
    flexGrow: {
        flex: '1 1 auto',
    },
});
class Home extends Component {
    render() {
        const classes = this.props.classes;
        return(
            <div>
                <Paper className={classes.paper} elevation={10}>
                    <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + 'banner/mountains.jpg'}
                        title="Contemplative Reptile"
                    />
                    <div>
                        <h1>  Headquarters Hair & Apparel </h1>
                    </div>
                    <h4>  145 S. Mesa Hills </h4>
                    <Typography type="body1" component="p">
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
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);