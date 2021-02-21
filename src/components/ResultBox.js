// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import ResultCard from 'components/ResultCard';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
	resultBox: {
		width: '80%',
		height: '500px',
		backgroundColor: 'white',
		borderRadius: '5px',
		overflowY: 'scroll',
		margin: '0 auto',
		marginBlock: '20px',
	},
	noResults: {
		color: 'black',
	},
});

const ResultBox = (props) => {
	const classes = useStyles();
	const favorites = useSelector((state) => state.favorites.posts);

	return (
		<Box className={classes.resultBox}>
			{props.data.length > 0 ? (
				props.data.map((id) => {
					return (
						<ResultCard
							key={id}
							postId={id}
							favorited={favorites.includes(id)}
						></ResultCard>
					);
				})
			) : (
				<span className={classes.noResults}>No results found.</span>
			)}
		</Box>
	);
};

export default ResultBox;
