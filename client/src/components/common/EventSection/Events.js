import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Events = () => {

  const [myData, setMyData] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('api/workspaces')
        setMyData(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
        setHasError(true)
      }
    }
    getData()
  }, [])
  console.log(myData)

  // const accidentalWorkspace = myData[Math.floor(Math.random() * myData.length)]
  // console.log(accidentalWorkspace.name)

  return (
    <>
      {myData ?
        <>
          <section>
            <div className="container taras2">
              <h1 className="fs-1 taras1 has-text-black-bis fw-bolder">Events at CEST</h1>
              <div className="row">
                <div className="col-9 has-text-black-bis fw-bold">Book a space, whatever bullshit text, something about how happy you gonna be booking with us and how awesome everything will look after you spend hell of a lot of money. Basically a text, that is super important but I am lazy to create a decent trade.</div>
                <div className="col"><div className="d-grid"><button type="button" className="btn btn-outline-primary btn-lg ">Book your event</button></div></div>
              </div>
            </div>
            <div className="container">
              <img src={myData[1].image}></img>
              <p className="text-end">{myData[1].name}, {myData[1].address}, {myData[1].postcode}, {myData[1].city}.</p>
            </div>
          </section>
          {/* ------------------------------------ */}
          <div className="container">
            <div className="row taras2">
              {myData.map(item => {
                return (
                  <>
                    <div className="col-sm-6 taras2">
                      <div className="card">
                        <figure className="image is-3by2">
                          <img src={item.image} className="card-img-top figure-img" alt={item.name} />
                        </figure>
                        <div className="card-body">
                          <h5 className="card-title fs-5 fw-bolder ">{item.name}</h5>
                          <p className="card-text taras1">{item.textDescription}</p>
                          <div className="d-grid">
                            <a href={item.link} className="btn btn-outline-primary btn-lg">See location website</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
          {/* ------------------------------------ */}
        </>
        :
        <section>
          <h1>{hasError ? 'Something has gone wrong' : 'Loading...'}</h1>
        </section>
      }
    </>
  )
}

export default Events