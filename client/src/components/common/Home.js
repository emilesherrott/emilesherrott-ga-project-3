//IMAGES + SLIDE
//BOX LOCATION
//BOX MAPS
//BOX FOR SOMTHING....

<<<<<<< HEAD

import React from 'react'

const Home = () => {
  return (
    <h1>Hello</h1>
=======
import React from 'react'
import office1 from '../../assets/home_assets/office1.jpg'
import office2 from '../../assets/home_assets/office2.jpg'
import office3 from '../../assets/home_assets/office3.jpg'
import deskspace from '../../assets/home_assets/deskspace.png'
import officespace from '../../assets/home_assets/officespace.png'
import openworkspace from '../../assets/home_assets/openworkspace.png'
import eventspace from '../../assets/home_assets/eventspace.png'

const Home = () => {

  return (
    <>
      {/* _________________________________ */}
      <div className="row taras1">
        <div className="col align-self-center">
          <div className="container">
            <div className="card border rounded">
              <div className="card-body">
                <h3 className="card-title text-center">Reimagine your workspace</h3>
                <p className="card-text text-center">Find some good spaces to work across the globe or close to you:</p>
                <div className="d-grid">
                  <button type="button" className="btn btn-outline-primary btn-lg">Start</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 align-self-center" >
          <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={office1} className="d-block w-100" alt="office1" />
                </div>
                <div className="carousel-item">
                  <img src={office2} className="d-block w-100" alt="office2" />
                </div>
                <div className="carousel-item">
                  <img src={office3} className="d-block w-100" alt="office3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* _________________________________ */}
      {/* _________________________________ */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col taras1">
            <div className="container">
              <div className="card border rounded ">
                <a href="#" type="button" className="btn btn-outline-secondary box-shadow">
                  <div className="card-body">
                    <h3 className="card-title text-center">Looking for an office space?</h3>
                    <img src={officespace} className="d-block w-100" alt="officespace" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col taras1">
            <div className="container">
              <div className="card border rounded">
                <a href="#" type="button" className="btn btn-outline-secondary box-shadow">
                  <div className="card-body">
                    <h3 className="card-title text-center">Looking for a desk space?</h3>
                    <img src={deskspace} className="d-block w-100" alt="deskspace" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col taras1">
            <div className="container">
              <div className="card border rounded">
                <a href="#" type="button" className="btn btn-outline-secondary box-shadow">
                  <div className="card-body">
                    <h3 className="card-title text-center">Looking for an open space?</h3>
                    <img src={openworkspace} className="d-block w-100" alt="openworkspace" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col taras1">
            <div className="container">
              <div className="card border rounded">
                <a href="#" type="button" className="btn btn-outline-secondary box-shadow">
                  <div className="card-body">
                    <h3 className="card-title text-center">Looking for an event space?</h3>
                    <img src={eventspace} className="d-block w-100" alt="eventspace" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* _________________________________ */}
    </>
>>>>>>> e5242ff385268e6923d220f9de5a5f4769f4e628
  )
}

export default Home