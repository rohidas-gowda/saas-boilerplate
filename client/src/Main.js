import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact Component={Home} />
                    <Route path="/login" exact Component={Login} />
                    <Route path="/register" exact Component={Register} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main