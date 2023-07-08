import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div style={{backgroundColor: "#f0f0f5", height: "100vh", textAlign: "center"}}>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Home