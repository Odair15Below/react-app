import React from 'react';
import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes, Container, Alert, Box, Typography } from '@material-ui/core';
import CategoriesTabs from './components/CategoriesTabs';
import ButtonAppBar from './components/NavBar';
import ScoreBar from './components/ScoreBar';
import { getDarkModePreference } from './store/app';
import { useSelector } from 'react-redux';

export default function App() {

  // dark theme handling
  const preferDarkMode = useSelector(getDarkModePreference);
  let theme = createTheme({
    palette: {
      mode: preferDarkMode ? 'dark' : 'light',
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <CssBaseline />
        <ButtonAppBar />
        <Container sx={{ padding: 0 }} maxWidth="md">
          <ScoreBar />
          <Box m={2} >
            <Alert severity="info" m='2' >
              <Typography variant='caption'>Reply to the below questions and get your score for Australian skill visa program.</Typography>
            </Alert>
          </Box>

          <CategoriesTabs />
        </Container>
      </React.StrictMode>
    </ThemeProvider>
  );
}