import React from 'react'
import './Header.css'
const Header = ({title}) => {
  return (
    <div className='p-5 bg-primary '>
            <div className='container block sm:hidden '>
              <nav >
                <ul className='flex  justify-end flex-wrap'>
                  <li ><a href="#about">About</a></li>
                  <li  ><a href="#experience">Experience</a></li>
                  <li  ><a href="#projects">Project</a></li>
                  <li  ><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
        </div>
  )
}

export default Header