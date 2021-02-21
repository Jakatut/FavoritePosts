// @flow
import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { useDispatch } from 'react-redux';
import PostActions from 'actions/PostActions';

const useStyles = makeStyles({
    search :{
        width: "80%",
    },
});

const SearchBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSubredditSearch = (event) => {
        let subreddit = event.value;
        dispatch(PostActions.getHotPosts(subreddit));
    }

    return (
        <input type="text" placeholder="Search a subreddit" className={classes.search} onKeyPress={(e) => onSubredditSearch}></input>
    );
}

export default SearchBar;