import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import App from './pages/App';

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact Component={Home} />
                    <Route path="/register" exact Component={Register} />
                    <Route path="/login" exact Component={Login} />
                    <Route path="/app" exact Component={App} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main