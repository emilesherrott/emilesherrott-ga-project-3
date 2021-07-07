import React from 'react'

const DisplayIndexAndMap = ({ myData, filteredData }) => {

  const styles = {
    imageTile: {
      width: '20vw',
    },
  }


  return (
    <>
      {(filteredData.length ? filteredData : myData).map((item, index) => {
        return (
          <div key={index}>
            <div className="col-sm-12 taras2" id={item._id} style={styles.imageTile}>
              <div className="card">
                <figure className="image is-3by2">
                  <img src={item.image} className="card-img-top figure-img" alt={item.name} />
                </figure>
                <div className="card-body">
                  <h5 className="card-title fs-5 fw-bolder">{item.name}</h5>
                  <h5 className="card-title fs-6 fw-bolder">Average rating: {item.avgRating}</h5>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default DisplayIndexAndMap