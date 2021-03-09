// @flow
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
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
		padding: '10px',
	},
	starSvg: {
		fill: 'white',
		stroke: 'black',
		strokeWidth: 5,
		cursor: 'pointer',
        marginRight: '20px',
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
						<Grid container alignContent='center'>
							<Grid item sm={12}>
                                
								{typeof props.thumbnail !== 'undefined' ? (
									<img
										className={classes.image}
										src={props.thumbnail}
										alt={'thumbnail'}
									/>
								) : (
									<></>
								)}
							</Grid>
							<Grid item container>
								<Grid item container>
									<Grid
										item
										lg={12}
										className={classes.title}
									>
										<Typography variant='h5'>
											{props.title}
										</Typography>
									</Grid>
									<Grid item container justify='space-around'>
										<Grid item lg={4}>
											<Typography variant='body1'>
												{props.upvotes} <b>Upvotes</b>
											</Typography>
										</Grid>
										<Grid item lg={4}>
											<Typography variant='body1'>
												<b>Posted by:</b> {props.author}
											</Typography>
										</Grid>
										<Grid item lg={4}>
											<Typography variant='body1'>
												<b>Created On: </b>{' '}
												{getFormattedDate()}
											</Typography>
										</Grid>
									</Grid>
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
