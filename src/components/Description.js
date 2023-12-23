/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import github from '..//components/github.png'

export default function Description() {
  return (
    <div className='container text-center my-5'>
      <h5>Description: This sproject is made in 61 minutes. It is just for fun and practice project by <span className='span'>Pranav Jain</span></h5>
     
      <a className='' href="https://github.com/Pranavuse"><img src={github} height="30px"/></a>
    </div>
  )
}
