// @flow
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import PostActions from 'actions/PostActions';
const axios = require('axios');

const useStyles = makeStyles({
	search: {
		width: '80%',
	},
});

const SearchBar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const onSubredditSearch = (event) => {
		return axios
			.get(
				process.env.REACT_APP_REDDIT_API_URL +
					event.value +
					'/hot.json?limit=10'
			)
			.then(({ data }) => {
				dispatch(PostActions.getTop10HotPosts(data));
			});
	};

	return (
		<input
			type='text'
			placeholder='Search a subreddit'
			className={classes.search}
			onKeyPress={(e) => onSubredditSearch}
		></input>
	);
};

export default SearchBar;
