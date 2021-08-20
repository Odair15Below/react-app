import * as React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { getTotalPoints } from '../store/app';
import { Grid, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px auto',
    width: '80%',
  },
}));


export default function ScoreBar() {

  const classes = useStyles();
  const myPoints = useSelector(getTotalPoints);

  return (
    <Paper className={classes.root} 
      elevation={24} 
      sx={{ bgcolor: 'success.main', p:2, color: 'primary.contrastText' }}
      >
      
      <Typography variant='caption' fontWeight='fontWeightLight'>Points required for immigration to Australia</Typography>

      <Grid container direction="row" justifyContent='space-between' align='center' >
        <Grid item>
          <Typography variant='subtitle2' component='span' fontWeight='fontWeightLight'>Minimum: </Typography> 
          <Typography variant='subtitle1' component='span' fontWeight='fontWeightMedium' >65</Typography>
        </Grid>

        <Grid item>
          <Typography variant='subtitle2' component='span' fontWeight='fontWeightLight'>Your points: </Typography> 
          <Typography variant='subtitle1' component='span' fontWeight='fontWeightMedium'>{myPoints}</Typography>
        </Grid>

      </Grid>


      {/* <span>Your points: {myPoints} </span> */}
    </Paper>
  );
}
