
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import blueGrey from 'material-ui/colors/blueGrey';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import MyTiles from './comp/tiles.jsx';


const styles = theme => ({
    appBar: {
        height: 60,
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
        backgroundColor:'#5c6bc0',
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
    boo: {
        backgroundColor: 'blueGrey'
    }
});

class RecipeReviewCard extends Component {
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
                        image={process.env.PUBLIC_URL + '/haircut.jpg'}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography type="headline" component="h2">
                            145 Mesa Hills El Paso, TX 79902
                        </Typography>
                    </CardContent>
                </Card>
                <ListItem button>
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hours" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Call" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reviews" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Send mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DirectionsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Directions" />
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
            <div className={classes.boo}>
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
                            Headquarters
                        </Typography>
                        <Button color="contrast">Login</Button>
                    </Toolbar>
                </div>
                <div>
                    <Paper className={classes.paper} elevation={10}>
                        <CardMedia
                            className={classes.media}
                            image={process.env.PUBLIC_URL + '/eclipse.jpg'}
                            title="Contemplative Reptile"
                        />
                        <Typography type="headline" component="h3">
                            Look your best
                        </Typography>
                        <Typography type="body2" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <MyTiles >

                        </MyTiles>
                    </Paper>

                </div>
                <div>
                </div>
            </div>

        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);