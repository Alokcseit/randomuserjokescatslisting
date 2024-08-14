import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div>select a page</div>
     <div style={{display: 'flex',gap: '10px'}}>
      <Link to="/cats">Cats</Link>
      <Link to="/jokes">Jokes</Link>
      <Link to="/users">Users</Link>
     </div>
    </>
  )
}

export default Home
