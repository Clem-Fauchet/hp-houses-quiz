import React from 'react'

function SlythDisplay({ house, image, quote, description, id }) {
  return (
    <div className='house'>
      <img src={image} alt='poster house' />
      <h2>Congrats you belong to {house}! </h2>
      <div className='bloc'>
        <span className='quote'>{quote}</span>
        <span className='description'>{description}</span>
      </div>
    </div>
  )
}

export default SlythDisplay
