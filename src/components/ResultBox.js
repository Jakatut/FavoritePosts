// @flow
import React from 'react';
import { makeStyles } from '@material-ui/styles'
import ResultCard from 'components/ResultCard';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    resultBox :{
        width: "80%",
        height: "500px",
        backgroundColor: "white",
        borderRadius: "5px",
        overflowY: "scroll",
        margin: '0 auto',
    },
});

const ResultBox = ()  => {
    const classes = useStyles();
    return (
        <Box className={classes.resultBox}>
            <ResultCard></ResultCard>
            <ResultCard></ResultCard>
            <ResultCard></ResultCard>
            <ResultCard></ResultCard>
            <ResultCard></ResultCard>
            <ResultCard></ResultCard>
            <ResultCard></ResultCard>
        </Box>
    )
}

export default ResultBox;