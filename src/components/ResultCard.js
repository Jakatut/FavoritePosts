// @flow
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FavoriteActions from 'actions/FavoriteActions';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
	resultBox: {
		backgroundColor: '#e3e3e3',
		borderRadius: '5px',
		margin: '10px',
	},
	postContent: {
		position: 'relative',
		height: '50%',
		padding: '10px',
	},
	starSvg: {
		fill: 'white',
		stroke: 'black',
		strokeWidth: 5,
        cursor: 'pointer'
	},
	title: {
		marginBottom: '10px',
	},
});

const ResultCard = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const onStarClick = () => {
		if (!props.favorited) {
			dispatch(FavoriteActions.addFavorite(props.postId));
		} else {
			dispatch(FavoriteActions.removeFavorite(props.postId));
		}
	};

	const getFormattedDate = () => {
		let date = new Date(props.createdAt * 1000);
		return date.toLocaleString();
	};

	return (
		<Grid container alignItems='center'>
			<Grid item xs={11}>
				<a href={props.link} className={classes.link}>
					<Paper className={classes.resultBox}>
						<Grid
							container
							direction='column'
							justify='space-between'
							className={classes.postContent}
						>
							<Grid item lg={12} className={classes.title}>
								<h4>{props.title}</h4>
							</Grid>
							<Grid container>
								<Grid item xs={4}>
									<span>{props.upvotes} <b>Upvotes</b></span>
								</Grid>
								<Grid item xs={4}>
									<span><b>Posted by:</b> {props.author}</span>
								</Grid>
								<Grid item xs={4}>
									<span><b>Created On: </b> {getFormattedDate()}</span>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</a>
			</Grid>

			<Grid item xs={1}>
				<svg
					width='48'
					height='46'
					viewBox='0 0 48 46'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					onClick={onStarClick}
					className={classes.starSvg}
				>
					<path
						d='M24 3.23607L28.6618 17.5836L28.8863 18.2746H29.6129H44.6987L32.494 27.1418L31.9062 27.5689L32.1307 28.2599L36.7925 42.6074L24.5878 33.7401L24 33.3131L23.4122 33.7401L11.2075 42.6074L15.8693 28.2599L16.0938 27.5689L15.506 27.1418L3.30127 18.2746H18.3871H19.1137L19.3382 17.5836L24 3.23607Z'
						stroke='black'
						strokeWidth='2'
						fill={props.favorited ? 'gold' : 'white'}
					/>
				</svg>
			</Grid>
		</Grid>
	);
};

export default ResultCard;
