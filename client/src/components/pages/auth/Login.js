import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import axios from 'axios'
import { setToken } from '../../helpers/auth'


import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit'

const Login = () => {

  const navigate = useNavigate() // go to home - add later in handleSubmit


  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')


  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formFields)
      const { data } = await axios.post('/api/login', formFields)
      console.log(data.token)
      setToken(data.token)
      navigate('/gallery') //add page
    } catch (err) {
      setError(err.response.data.message)
    }
  }





  return (
    <main className="form-page">
      <MDBContainer className='my-5'>
        <MDBCard>
          <MDBRow className='g-0 d-flex align-items-center'>
            {/* <Container className='mt-4'>
            <Row> */}
            <MDBCol md='4'>
              <MDBCardImage src='https://res.cloudinary.com/ddy4ifl5i/image/upload/v1672952179/rocklizardspock_one_man_with_surreal_rabbit_mask_cyberpunk_surr_a49fe766-0f17-42da-9310-53d4d2e496a2_zohmqh.png' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>

            <MDBCol md='8'>

              <MDBCardBody>

                <div className='col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-8'>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <h1> LOGIN </h1>



                    <MDBInput wrapperClass='mb-4' onChange={handleChange} name="email" value={formFields.email} label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' onChange={handleChange} name="password" value={formFields.password} label='Password' id='form2' type='password' />



                    {/* error */}
                    {error && <small className='text-danger'>{error}</small>}
                    {/* submit */}
                    <MDBBtn className="mb-4 w-100" color="danger">Sign in</MDBBtn>
                  </form>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </main >
  )
}

export default Login


