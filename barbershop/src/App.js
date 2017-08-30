
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
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
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ComputerIcon from 'material-ui-icons/Computer';
import ReportIcon from 'material-ui-icons/Report';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';

import red from 'material-ui/colors/red';
import blueGrey from 'material-ui/colors/blueGrey';
import brown from 'material-ui/colors/brown';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';


const styles = theme => ({
    appBar: {
        height: 60,
    },
    paper: theme.mixins.gutters({
        paddingTop: 16,
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
        height: 194,
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
        backgroundColor:'#F44336',
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
                        image="https://www.9to5animations.com/wp-content/uploads/2016/12/Nature-sunset-hd-wallpaper.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography type="headline" component="h3" className="{classes.toolbarheader}">
                            Look your best
                        </Typography>
                        <Typography component="p">
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
                                Headquarters Hair & Apparel
                            </Typography>
                            <Button color="contrast">Login</Button>
                        </Toolbar>
                </div>
                <div>
                    <Paper className={classes.paper} elevation={4}>
                        <Typography type="headline" component="h3">
                            Look your best
                        </Typography>
                        <Typography type="body1" component="p">
                            Book an appointment with confidence in knowing
                            that we are all trained and certified in the hair industry.
                        </Typography>
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