// @flow
import React from 'react';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    search :{
        width: "80%",
    },
});

const SearchBar = () => {
    const classes = useStyles();
    return (
        <input type="text" placeholder="Search a subreddit" className={classes.search}></input>
    );
}

export default SearchBar;