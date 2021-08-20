import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Avatar, Grid, Switch, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { changeDarkMode, getDarkModePreference } from '../store/app';
import AuFlag from '../assets/australia.png';

export default function ButtonAppBar() {

  const dispatch = useDispatch();
  const preferDarkMode = useSelector(getDarkModePreference);
  const handleDarkModeChange = (isDarkMode) => dispatch(changeDarkMode(isDarkMode));

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center" >
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar alt="Australia" src={AuFlag} variant="square" />
              </Grid>
              <Grid item>
                <Typography variant="h6" component='span'> AU visa calculator</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="caption" component='span'>Dark Mode</Typography>
            <Switch checked={preferDarkMode} onChange={() => handleDarkModeChange(!preferDarkMode)} />
            <Typography variant="caption" component='span'>{preferDarkMode ? 'on' : 'off'}</Typography>

          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
