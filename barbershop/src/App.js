
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';

import red from 'material-ui/colors/red';
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
        backgroundColor:'#00bfa5',
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
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Send mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </div>
        );

        const otherMailFolderListItems = (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="All mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ReportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Spam" />
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
                                Headquarters Hair & Apparel
                            </Typography>
                            <Button color="contrast">Login</Button>
                        </Toolbar>
                </div>
                <div>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    R
                                </Avatar>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            className={classes.media}
                            image="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.kellyjbaker.com%2Fwp-content%2Fuploads%2F2015%2F07%2Fo-COFFEE-TEA-TASTE-facebook.jpg&f=1"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with
                                your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableActionSpacing>
                            <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="Share">
                                <ShareIcon />
                            </IconButton>
                            <div className={classes.flexGrow} />
                            <IconButton
                                className={classnames(classes.expand, {
                                    [classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph type="body2">
                                    Method:
                                </Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                    minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                    chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                                    salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                    minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                                    cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                                    Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                                    the rice, and cook again without stirring, until mussels have opened and rice is
                                    just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);