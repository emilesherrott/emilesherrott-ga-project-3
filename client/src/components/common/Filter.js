import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Filter = () => {
  const [filtered,setfiltered] = useState([])
  const [workspaces, setWorkspaces] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/workspaces')
      setWorkspaces(data)
    }
    getData()
  },[])

  
  function handleCity (event) {
    if (event.target.value === 'London') {
      setfiltered(workspaces.filter(iter => iter.city === 'London')) 
    } else if (event.target.value === 'Vilnius'){
      setfiltered(workspaces.filter(iter => iter.city === 'Vilnius'))
    } else if (event.target.value === 'Kaunas'){
      setfiltered(workspaces.filter(iter => iter.city === 'Kaunas'))
    } else if (event.target.value === 'All') {
      setfiltered(workspaces)
    }
  }

  function handleCountry() {
    console.log('this shit works')
    if (event.target.value === 'Lithuania') {
      setfiltered(workspaces.filter(iter => iter.country === 'Lithuania')) 
    } else if (event.target.value === 'United Kingdom'){
      setfiltered(workspaces.filter(iter => iter.country === 'United Kingdom'))
    }
  }
  
  

  return (
    <>

      <label >Choose a Country:</label>
      <select name="countries-sa" id="countries-sa" onChange={handleCountry}>
        <option value="All">All</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Lithuania">Lithuania</option>
      </select>
      
      <label >Choose a city:</label>
      <select name="cities-sa" id="cities-sa" onChange={handleCity}>
        <option value="All">All</option>
        <option value="London">London</option>
        <option value="Vilnius">Vilnius</option>
        <option value="Kaunas">Kaunas</option>
      </select>
      
      {filtered.map(item => {
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
      
      
    </>
  )
}
export default Filter





// {workspaces.map(iter => <h1 key={iter._id}>{iter.name} & {iter.city}</h1>)}

