import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Wobbly Honest Skunk</title>
        <meta property="og:title" content="Wobbly Honest Skunk" />
      </Helmet>
      <img
        src="/playground_assets/export%5B5%5D-400w.jpg"
        alt="image"
        className="home-image"
      />
    </div>
  )
}

export default Home
