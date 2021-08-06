import React from 'react'
import { Link } from 'react-router-dom'


const TopPart = () => {
  return (
    <>
      <div className="container taras2">
        <h1 className="fs-1 taras1 has-text-grey-bis fw-bolder">Events at CEST</h1>
        <div className="row">
          <div className="col-9 has-text-gray-bis fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <Link to="/contactform"><div className="col taras2"><div className="d-grid"><button type="button" className="btn btn-outline-primary btn-lg changingcolor1" id="changingcolor">Book your event</button></div></div></Link>
        </div>
      </div>

    </>
  )
}

export default TopPart