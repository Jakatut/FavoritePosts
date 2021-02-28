// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import ResultCard from 'components/ResultCard';
import { Box } from '@material-ui/core';
import FavoriteActions from 'actions/FavoriteActions';

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
	const favorites = useSelector((state) => state.favorites.ids);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FavoriteActions.getFavoriteIds())
    }, [])

	return (
		<Box className={classes.resultBox}>
			{props.data?.length > 0 ? (
				props.data.map((post) => {
					return (
						<ResultCard
							key={post.id + props.id}
                            postId={post.id}
                            title={post.title}
                            author={post.author}
                            upvotes={post.upvotes}
							favorited={favorites.includes(post.id)}
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
