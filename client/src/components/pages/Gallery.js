// Imports
import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Avatar from 'react-avatar'


const Gallery = () => {

  //! State
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects/')
        setProjects(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getProjects()
  }, [])

  console.log('PROJECTSSSS---->', projects)

  return (
    <main className='index-page'>
      <h1 className='gallery-title'>Gallery</h1>
      {projects.length > 0 &&
        projects.map(project => {
          const { _id, name, image, owner } = project
          console.log('QUESTO é IDDDD --->>>>>>', _id)
          console.log('QUESTO é IDDDD --->>>>>>', name)
          console.log('QUESTO é IMAGE --->>>>>>', image)

          return (
            <div key={_id} className='post'>
              <div className='post_header'>
                <Avatar className='post_avatar' instagramId="sitebase" name="Wim Mostmans" size={50} round="40px" />
                <h3>{owner.username}</h3>
              </div>
              <Link to={`/project/${_id}`}>
                <img className="post_image" src={image} alt={name} />
              </Link>
              <h4 className='post_text'><strong>{owner.username}</strong> {name}</h4>
            </div >
          )
        })
      }
    </main >
  )

}


//'/api/projects'

export default Gallery
