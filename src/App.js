import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from '@mui/material/Button';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import Header from './components/Header';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <Header/>
        <Container >
          
          <div className="App">
            <header className="App-header">
              <img src={logo} className="logo" alt="logo" />
              <Typography component={'p'}>
                Edit <code>src/App.js</code> and save to reload.
              </Typography>
              <Link
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                color={'secondary'}
              >
                Learn React
              </Link>
              <Button color="primary" variant="contained">Hello World</Button>
            </header>
          </div>
        </Container>
      </Box>


    </ThemeProvider>
  );
}

export default App;
