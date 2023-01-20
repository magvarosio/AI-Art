import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { isOwner, getToken } from '../helpers/auth'


// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography
} from 'mdb-react-ui-kit'


const Profile = () => {

  const { projectId } = useParams()
  const currentDate = new Date()
  // console.log('useParams ---->', useParams)
  const navigate = useNavigate()


  const [project, setProject] = useState(null)
  const [errors, setErrors] = useState(false)

  const getProject = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/projects/${projectId}`)
      // authorization ?
      console.log(data)
      setProject(data)
    } catch (err) {
      console.log(err)
      setErrors(true)
    }
  }, [projectId])

  useEffect(() => {

    getProject()
  }, [projectId])

  const deleteReview = async (reviewId) => {
    try {
      await axios.delete(`/api/projects/${projectId}/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      getProject()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='single-page'>
      <Container className='mt-4'>
        <Row>
          {project ?
            <>
              <div className='profile'>

                {/* ****  USER IMG ******* */}
                <Col md="2">
                  <div >
                    <img src={project.image} alt={project.name} />
                  </div>
                  <hr />
                </Col>

                {/* add review button*/}

                <Link to={`/projects/${projectId}/reviews`}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="delete">
                    Add review
                  </button>
                </Link>


                <Link to="/projects" className='btn btn-main'>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="delete">
                    Back to projects
                  </button>
                </Link>

                {/* **** Artist ******* */}
                <Col md="6">
                  <div>
                    <p className="det-subtitle"><span>🖼</span> Artist</p>
                    <p className="det-text">{project.owner.username}</p>
                  </div>

                  <hr />


                  {/* **** PROMPT ******* */}
                  <p className="det-subtitle"><span>📘</span> AI prompt: </p>
                  <p className="det-text">{project.name}</p>
                  <hr />


                  {/* **** YEAR ******* */}
                  <p className="det-subtitle"><span>🔵</span> Year</p>
                  <p className="det-text">{project.year}</p>
                  <hr />
                  {/* AVG Rating  */}
                  <p className="det-subtitle"><span>🏁</span> Average Rating </p>
                  <p className="det-text">{project.avgRating}</p>
                  <hr />
                </Col>





                {/* Reviews  */}
                <br />
                <br />

                {/* <p className="det-subtitle"><span>💬</span> Reviews </p> */}
                <div>
                  {project.reviews.length > 0 && project.reviews.map(review => {


                    return (
                      <div key={review._id}>


                        <MDBCardBody className="p-4">
                          <div className="d-flex flex-start">
                            <MDBCardImage
                              className="rounded-circle shadow-1-strong me-3"
                              src="https://miro.medium.com/fit/c/224/224/1*jcCj4opBePGfTeiHfZwyiw.png"
                              alt="avatar"
                              width="60"
                              height="60"
                            />
                            <div>
                              <MDBTypography tag="h6" className="fw-bold mb-1 text-black">
                                Rating: {review.rating}
                              </MDBTypography>
                              <p className="mb-0">
                                {currentDate.toString(review.created_at)}
                              </p>
                              {/* <MDBTypography tag="h6" className="fw-bold mb-1 text-white">
                                {review.rating}
                              </MDBTypography> */}


                              <div className="d-flex align-items-center mb-3 text-black">


                              </div>
                              <p className="mb-0 text-black">
                                {review.text}
                              </p>
                            </div>
                          </div>
                        </MDBCardBody>
                        {/* <p>{review.text}</p>
                        <p>{review.rating}</p> */}




                        <div className="bottoni">


                          <Link to={`/projects/${projectId}/reviews/${review._id}/edit`}>
                            <button
                              type="button"
                              className="btn btn-primary">
                              Edit
                            </button>
                          </Link>


                          <button
                            type="button"
                            className="btn btn-primary"
                            id="delete"
                            onClick={() => deleteReview(review._id)}>Delete</button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <hr />




              </div>

            </>
            :
            errors ? <h2>Something went wrong!</h2> : <h2>Loading</h2>
          }
        </Row>
      </Container>
    </main >
  )
}

export default Profile
