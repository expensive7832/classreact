import React from 'react'
import logo from "./../assets/landing.svg"

function Landing() {
  return (
    <div className='landing d-flex justify-content-center align-items-center flex-column'>
        <img src={logo} alt="" />
    </div>
  )
}

export default Landing