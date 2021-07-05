import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TopPart from './TopPart'
import { getPayload } from './CommentsAuth'
import { Link, useHistory } from 'react-router-dom'
import { getTokenFromLocalStorage } from './CommentsAuth'


const Events = () => {

  const [count, setCount] = useState(0) //!using this for rerender

  const userIsAuthenticated = () => {
    // console.log('hi')
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

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
  }, [count])
  // console.log(myData)

  const [comment, setComment] = useState({
    text: '',
    rating: '',
  })
  const [errors, setErrors] = useState({
    text: '',
    rating: '',
  })
  console.log(errors)
  

  const handleChange = (event) => {
    const newComment = { ...comment, [event.target.name]: event.target.value }
    console.log(event.target.name)
    const newErrors = { ...errors.rating, [event.target.name]: '' }
    setComment(newComment)
    setErrors(newErrors)
  }
  console.log(`comment text - ${comment.text}, comment rating - ${comment.rating}`)


  const [commentedVenueId, setCommentedVenueId] = useState('')
  const getId = (event) => {
    setCommentedVenueId(event.target.id)
  }

  const history = useHistory()
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`api/workspaces/${commentedVenueId}/comments`,
        comment,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push('/events')
      setCount(prevCount => prevCount + 1)
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  return (
    <>
      {myData ?
        <>
          <section>
            <TopPart />
            <div className="container">
              <img src={myData[1].image}></img>
              <p className="text-end">{myData[1].name}, {myData[1].address}, {myData[1].postcode}, {myData[1].city}.</p>
            </div>
          </section>
          {/* ------------------------------------ */}
          <div className="container">
            <div className="row taras1">
              {myData.map((item, index) => {
                return (
                  <>
                    <div className="col-sm-6 taras2" id={item._id}>
                      <div className="card">
                        <figure className="image is-3by2">
                          <img src={item.image} className="card-img-top figure-img" alt={item.name} />
                        </figure>
                        <div className="card-body">
                          <h5 className="card-title fs-5 fw-bolder">{item.name}</h5>
                          <h5 className="card-title fs-6 fw-bolder">Average rating: {item.avgRating}</h5>
                          <p className="card-text taras1">{item.textDescription}</p>
                          <div className="d-grid">
                            <a href={item.link} className="btn btn-outline-primary btn-lg">See location website</a>
                          </div>
                          <p className="d-grid taras2">
                            <button className="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target={`#id${index}`} aria-expanded="false" aria-controls={`id${index}`}>Comments and rating</button>
                          </p>
                          <div className="row">
                            <div className="col">
                              <div className="collapse multi-collapse" id={`id${index}`}>
                                <div className="card card-body">
                                  {userIsAuthenticated() ?
                                    <form onSubmit={handleSubmit}>
                                      <div className="">
                                        <div className="form-floating">
                                          <textarea className="form-control" placeholder="Leave a comment here" id="InputComment1" onChange={handleChange} name="text"></textarea>
                                        </div>
                                        {/* {errors ? <p className="help is-danger">Another stuff</p> : '' } */}
                                        {/* {errors && <p className="help is-danger">{errors.text}</p>} */}
                                        <div id="commentHelp" className="form-text">Leave your comment here.</div>
                                      </div>
                                      <div className="form-floating">
                                        <select defaultValue={'DEFAULT'} className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="choose your mark" onChange={handleChange} name="rating">
                                          <option value="DEFAULT" disabled>Select from following:</option>
                                          <option value="1">1 star</option>
                                          <option value="2">2 stars</option>
                                          <option value="3">3 stars</option>
                                          <option value="4">4 stars</option>
                                          <option value="5">5 stars</option>
                                        </select>
                                        {/* {errors.name && <p className="help is-danger">{errors.rating}</p>} */}
                                        <label htmlFor="floatingSelect">Rate it with stars:</label>
                                        <div id="commentRating" className="form-text">Choose a number of stars given.</div>
                                      </div>
                                      <p className="d-grid taras2">
                                        <button type="submit" className="btn btn-primary btn-sm taras3" id={item._id} onClick={getId}>Add a comment</button>
                                      </p>
                                    </form>
                                    :
                                    <Link to="/login"><button typ="button" className="btn btn-warning">Please login to access comments.</button></Link>
                                  }
                                  <div>{item.comments.map(comment => {
                                    return (
                                      <>
                                        <div key={comment._id}>
                                          <p>Rating: {comment.rating} out of 5.</p>
                                          <p>Comment: {comment.text}</p>
                                          <p>Created at: {comment.createdAt}</p>
                                        </div>
                                      </>
                                    )
                                  })}</div>
                                </div>
                              </div>
                            </div>
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

{/* 
                          
                          <div className="row">
                            <div className="col">
                              <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                  Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                              </div>
                            </div>
                          </div> */}