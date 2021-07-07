import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'

const Maptwo = () => {

  const [myData, setMyData] = useState([])
  const [popup, setPopup] = useState(null)

  console.log(popup)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/workspaces')
      setMyData(data)
    }
    getData()
  }, [])
  console.log(myData)

  const [viewport, setViewport] = useState({
    latitude: 52.515,
    longitude: -0.078,
    zoom: 4,
  })


  //this shows where you are currently on the map
  // const [viewPort, setViewPort] = useState(null)
  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(position => {
  //     const { longitude, latitude } = position.coords
  //     setViewPort({ longitude, latitude })
  //   })
  // }, [])
  // console.log(viewPort)



  
  return (
    <>
      <div className="map-container">
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle='mapbox://styles/mapbox/streets-v11'
          {...viewport}
          //   latitude={-51.550320}
          //   longitude={-0.108110}
          //   zoom={10}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {myData.map(iter => {
            return (<Marker key={iter._id} latitude={parseFloat(iter.lat)} longitude={parseFloat(iter.long)}>
              <span onClick={() => setPopup(myData)}>
                {'😜'}
              </span>
            </Marker>)

          })}
          {/* {popup &&
            myData.map(iter => {
              return (
                <Popup key={iter._id}
                  latitude={parseFloat(iter.lat)}
                  longitude={parseFloat(iter.long)}
                  onClose={() => setPopup(null)}
                >
                  <div>{iter.name}</div>
                </Popup>

              )
            })
          } */}
          <Link to={'/'}>
            <button type="button" className="btn btn-info btn-sm">Go Back</button>
          </Link>
          {/* <Marker latitude={-51.550320} longitude={-0.108110}>
        
          </Marker> */}
        </ReactMapGL>
        {/* {myData.map(iter => <h1 key={iter._id}>{`lo: ${iter.long}`} & {`lat: ${iter.lat}`}</h1>)} */}
      </div>
    </>
  )
}
export default Maptwo

//  {-0.108110:-0.115220},{51.550320:51.513100}