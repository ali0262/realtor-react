import React from 'react';
import {BrowserRouter,Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import ForgotPassword from './Pages/ForgotPassword';
import Offers from './Pages/Offers';



const App = () => {
    return (
      
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/sign-in' element={<Signin/>}/>
                <Route path='/offers' element={<Offers/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
  
 
    );
}

export default App;

