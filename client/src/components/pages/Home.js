import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <main className='hero-page text-center'>

      <div
        className='p-5 text-center bg-image'
        // eslint-disable-next-line quotes
        style={{ backgroundImage: "url('https://res.cloudinary.com/ddy4ifl5i/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1672953317/Mag_empire_of_the_mind_black_and_white_ink_dee42eb8-88f0-4c22-a9eb-fe286dd1dc5c_bqlqrf.png')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>

          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Explore the Gallery
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="hero">
        <h1 className='display-3'> Art Factory</h1>
        <p className='lead'>Discover and share groundbreaking AI-generated art</p>
      </div>
    </main>
  )
}
export default Home