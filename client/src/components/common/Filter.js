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
  }, [])

  
  function handleChange (event) {
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
  
  
  

  return (
    <>
      <label >Choose a city:</label>
      <select name="cars" id="cars" onChange={handleChange}>
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

