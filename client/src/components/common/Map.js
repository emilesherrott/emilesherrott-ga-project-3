import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

const Map = ({ myData, filteredData }) => {

  const [popup, setPopup] = useState(null)

  console.log(popup)


  const [viewport, setViewport] = useState({
    latitude: 52.515,
    longitude: -0.078,
    zoom: 4,
  })
  
  return (
    <>
      <div className="map-container">
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='80vh'
          width='143,2vh'
          mapStyle='mapbox://styles/mapbox/streets-v11'
          {...viewport}
          //   latitude={-51.550320}
          //   longitude={-0.108110}
          //   zoom={10}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {(filteredData.length ? filteredData : myData).map(iter => {
            return (<Marker key={iter._id} latitude={parseFloat(iter.lat)} longitude={parseFloat(iter.long)}>
              <span onClick={() => setPopup(myData)}>
                {'📍'}
              </span>
            </Marker>)
          })}
          {popup &&
            (filteredData.length ? filteredData : myData).map(iter => {
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
          }
        </ReactMapGL>
      </div>
    </>
  )
}
export default Map
