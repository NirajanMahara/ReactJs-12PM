import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'


const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signin" element={<Signin/>}/>

            </Routes>
            
        </Router>
    )
}

export default MyRoute
