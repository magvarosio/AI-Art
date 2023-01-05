
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// bootstrap

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



const Register = () => {

  const navigate = useNavigate()


  const [formFields, setFormFields] = useState({
    username: '', //match the input
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [error, setError] = useState('')

  // formFields updates (state) when input changes
  const handleChange = (e) => {
    const updatedFormFields = {
      ...formFields,
      [e.target.name]: e.target.value,
    }
    setFormFields(updatedFormFields)
  }


  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formFields)
    try {
      await axios.post('/api/register', formFields)
      console.log('Register successful')
      navigate('/login')
    } catch (err) {
      console.log(err.response.data.message)
      setError(err.response.data.message)
    }
  }



  return (
    <main className="form-page">
      <MDBContainer className='my-5'>
        <MDBCard>
          <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='4'>
              <MDBCardImage src='https://res.cloudinary.com/ddy4ifl5i/image/upload/v1672952192/rocklizardspock_futuristic_city_concept_art_stopped_in_time_atm_399b2e59-a728-41c2-bfb2-6a7a5857d349_bnqhuk.png' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>

            <MDBCol md='8'>
              <MDBCardBody>

                <div className='col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <h1> REGISTER </h1>

                    {/* username */}

                    <MDBInput wrapperClass='mb-4' type="text" name="username" onChange={handleChange} value={formFields.username} label='Username' id='form1' />


                    {/* email */}

                    <MDBInput wrapperClass='mb-4' type='email' name="email" onChange={handleChange} value={formFields.email} label='Email address' id='form2' />

                    {/* psw */}

                    <MDBInput wrapperClass='mb-4' onChange={handleChange} name="password" value={formFields.password} label='Password' id='form3' type='password' />

                    {/* psw confirmation */}
                    <MDBInput wrapperClass='mb-4' onChange={handleChange} name="passwordConfirmation" value={formFields.passwordConfirmation} label='Password Confirmation' id='form4' type='passwordConfirmation' />
                    {/* error */}
                    {error && <small className='text-danger'>{error}</small>}
                    {/* submit */}
                    <MDBBtn className="mb-4 w-100" color="danger">Register</MDBBtn>
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
export default Register