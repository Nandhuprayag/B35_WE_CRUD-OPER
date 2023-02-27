import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Movielist } from './Movielist';
import { Counter } from './Counter';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MovieDetails } from './MovieDetails';


function App() 
{
   const [mode,setMode]=useState('dark')


  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate=useNavigate()
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar position='relative' className='btn-style'>
           <div >
           <Button variant="outlined" color='inherit' 
           onClick={()=> navigate('/')}
           >Home</Button>    
           <Button variant="outlined" color='inherit' 
           onClick={()=> navigate('/movie')}
           >Movies</Button>
           <Button variant="outlined" color='inherit' 
           onClick={()=> navigate('/counter')}
           >Counter</Button>
           </div>
           <div>
            <Button color='inherit'
            startIcon={mode === 'dark'?<Brightness7Icon/>:<Brightness4Icon/>}
            onClick={()=> setMode(mode === 'dark'? 'light':'dark')}
            >{mode === 'dark' ?"Light":"Dark"} Mode</Button>
           </div>
        </Toolbar>
      </AppBar>

      <Routes>
      <Route path='/' element={<Home/>}/>      
      <Route path='/movie' element={<Movielist/>}/>
      <Route path='/movie/:id' element={<MovieDetails/>}/>
      <Route path='/counter' element={<Counter/>}/>
      </Routes>
      </Box>
      </ThemeProvider>
    </div>
  );
}


export default App;
