//IMAGES + SLIDE
//BOX LOCATION
//BOX MAPS
//BOX FOR SOMTHING....

import React from 'react'
import office1 from '../../assets/home_assets/office1.jpg'
import office2 from '../../assets/home_assets/office2.jpg'
import office3 from '../../assets/home_assets/office3.jpg'

const Home = () => {

  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={office1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={office2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={office3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={office2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={office3} className="d-block w-100" alt="..." />
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
    </>
  )
}

export default Home