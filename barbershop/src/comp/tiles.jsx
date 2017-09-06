// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        paddingTop: 50,
        width: 500,
        height: 450,
    },
    subheader: {
        width: '100%',
    },
});


const tileData = [
    {
        img: "http://pophaircuts.com/images/2015/06/Lob-Haircut-Ideas-for-Girls-and-Women.jpg",
        title: 'Image',
        author: 'author',
        cols: 0,
    },
    {
        img: "http://ideastand.com/wp-content/uploads/2016/01/short-haircuts-for-round-faces/22-short-haircuts-for-round-faces.jpg",
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: "http://gvenny.com/images5/0316/best-haircuts-for-2016/best-haircuts-for-2016-90_2.jpg",
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: "http://www.mens-hairstyle.com/wp-content/uploads/2017/07/19.Fade-Haircuts-for-Black-Men.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2013/12/2-red-layered-haircut-for-mediumlength-hair.jpg?w=500",
        title: 'Image',
        author: 'author',
        cols: 2,
        rows: 1,
    },

];
function ImageGridList(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1 || 2 || 3 }>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);