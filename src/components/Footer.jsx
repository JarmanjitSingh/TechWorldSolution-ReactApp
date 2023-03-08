import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
    <div>
      <h1>TechWorld</h1>
      <p>&copy; all rights reserved</p>
    </div>

    <div>
        <h5>Follow us</h5>
        <div className='footerTags'>
        <a href="https://www.linkedin.com/in/jarmanjit-singh-029452256" target="_blank">linkedin</a>
        <a href="https://www.instagram.com/jarmanjit01/" target="_blank">instagram</a>
        <Link to="/">facebook</Link>
        <Link to="/">youtube</Link>
    </div>
    </div>
    </footer>
  )
}

export default Footer
