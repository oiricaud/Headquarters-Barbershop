
import React, { Component } from 'react';
import './App.css'
import PropTypes from 'prop-types';
import {BrowserRouter, Route, NavLink } from 'react-router-dom'
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import BusinessIcon from 'material-ui-icons/Business';
import PhoneIcon from 'material-ui-icons/Phone';
import DirectionsIcon from 'material-ui-icons/Directions';
import DateRangeIcon from 'material-ui-icons/DateRange';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import ComputerIcon from 'material-ui-icons/Computer';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import red from 'material-ui/colors/red';
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';
import MyTiles from './components/tiles.jsx';
import MyFooter from './components/footer.jsx';

const styles = theme => ({
    appBar: {
        height: 60,
    },
    h1:{
        weight: 10,
        backgroundColor: '#090'
    },
    paper: theme.mixins.gutters({
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    }),
    card: {
        maxWidth: 400,
    },
    media: {
        height: 300,
        marginBottom:20,
    },
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
    root: {
        marginTop: 0,
        width: '100%',
        backgroundColor:'#24292e',
    },
    flex: {
        flex: 1,
        color: '#FAFAFA'
    },
    list: {
        width: 250,
        flex: 'initial',
    },
    listFull: {
        width: 'auto',
        flex: 'initial',
    },
});

class App extends Component {

    state = {
        open: {
            top: false,
            left: false,
            bottom: false,
            right: false,
        },
        expanded: false
    };
    toggleDrawer = (side, open) => {
        const drawerState = {};
        drawerState[side] = open;
        this.setState({ open: drawerState });
    };
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    handleLeftOpen = () => this.toggleDrawer('left', true);
    handleLeftClose = () => this.toggleDrawer('left', false);

    render() {
        const classes = this.props.classes;

        const mailFolderListItems = (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + 'banner/stars.jpg'}
                        title="Contemplative Reptile"
                    />
                </Card>
                <ListItem button>
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <NavLink activeClassName='active' to='hours'>Hours</NavLink>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PhoneIcon />
                    </ListItemIcon>
                    <NavLink to='call'>Call</NavLink>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <NavLink to='reviews'>Reviews</NavLink>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <NavLink to='mail'>Mail</NavLink>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DirectionsIcon />
                    </ListItemIcon>
                    <NavLink to='directions'>Directions</NavLink>
                </ListItem>
            </div>
        );

        const otherMailFolderListItems = (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <DateRangeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Appointments" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ComputerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Careers" />
                </ListItem>
            </div>
        );

        const sideList = (
            <div>
                <List className={classes.list} disablePadding>
                    {mailFolderListItems}
                </List>
                <Divider />
                <List className={classes.list} disablePadding>
                    {otherMailFolderListItems}
                </List>
            </div>
        );

        const fullList = (
            <div>
                <List className={classes.listFull} disablePadding>
                    {mailFolderListItems}
                </List>
                <Divider />
                <List className={classes.listFull} disablePadding>
                    {otherMailFolderListItems}
                </List>
            </div>
        );

        return (
            <BrowserRouter>
            <div>
                <div className={classes.root}>
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu"  onClick={this.handleLeftOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            open={this.state.open.left}
                            onRequestClose={this.handleLeftClose}
                            onClick={this.handleLeftClose}>
                            {sideList}
                        </Drawer>
                        <Typography type="title" className={classes.flex}>
                            Home
                        </Typography>
                    </Toolbar>

                    <Route exact path='/' render={() => <h1> Home </h1>} />
                    <Route
                        exact
                        path='/hours'
                        render={() => <h1> Hours </h1>}
                    />
                </div>
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
                <div>
                    <MyFooter>
                    </MyFooter>
                </div>
            </div>
        </BrowserRouter>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);