import React from 'react'
import './Home.css'
import { Navbar } from '../Navbar/Navbar'
import { Content } from '../Contents/Content'


const Home = () => {
  const token = localStorage.getItem("token")
  console.log("adadd")
    return (
      <div className="home">
        <Content/>
      </div>
    )
}

export default Home
