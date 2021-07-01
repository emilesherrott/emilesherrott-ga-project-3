import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [workspaces, setWorkspaces] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/workspaces')
      setWorkspaces(data)
    }
    getData()
  }, [])
  return (
    <>
      {workspaces.map(iter => <h1 key={iter._id}>{iter.name}</h1>)}
    </>
  )
}

export default App

