import React from 'react';

// Routing
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';
// Style
import {GlobalStyle} from './GlobalStyle';

// const Star = () => React.createElement('div', null,'This is a little star');

// // Arrow function
// const app = () => React.createElement('div', null,'Start here');

// Context
import UserProvider from './context';


const App =() => ( 
    <Router> 
      <UserProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
        <GlobalStyle/>
        
      </UserProvider>
    </Router>
  );


export default App;
