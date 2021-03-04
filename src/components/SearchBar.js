// @flow
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import PostActions from 'actions/PostActions';
import { Button, Grid, TextField } from '@material-ui/core';
const axios = require('axios');

const useStyles = makeStyles({
	search: {
		width: '80%',
	},
    input: {
        backgroundColor: 'white',
        borderRadius: '10px',
    },
});

const SearchBar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
    const [subreddit, setSubreddit] = useState('all');

	const onSubredditSearch = (event) => {
		return axios
			.get(
				process.env.REACT_APP_REDDIT_API_URL +
					'r/' +
					subreddit +
					'/hot.json?limit=10'
			)
			.then(({ data }) => {
				dispatch(PostActions.getPostData(data));
			});
	};

	return (
		<Grid container className={classes.search} justify='space-between' alignItems='center'>
			<Grid item xs={8}>
				<TextField variant='filled' fullWidth type='text' placeholder='Search a subreddit' className={classes.input} onChange={e => setSubreddit(e.target.value)} />
			</Grid>
			<Grid item xs={3}>
				<Button variant='contained' fullWidth centerRipple onClick={onSubredditSearch}>
					Search
				</Button>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
