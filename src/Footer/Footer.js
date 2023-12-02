import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className='footer'>
        &copy; RabbitZone {new Date().getFullYear()}

      </footer>
    </div>
  )
}

export default Footer
