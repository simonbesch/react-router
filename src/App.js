import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/articles/Post';
import Posts from './components/articles/Posts';
import Account from './components/users/Account';
import Login from './components/users/Login';
import Homepage from './components/Homepage';
import Profil from './components/users/Profil';
import Register from './components/users/Register';



class App extends Component {
  render() {
    return (
      <Router>
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/post/:id' element={<Post/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile' element={<Profil/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profil' element={<Profil/>}/>
         </Routes>
       </div>
       </Router>
    );
  }
}

export default App;
