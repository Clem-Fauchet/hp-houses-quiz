import React from 'react'

function SlythDisplay({ house, image, quote, description, id }) {
  return (
    <div>
      you belong to {house}
      <img src={image} alt='poster house' />
      <br /> {quote} {description}
    </div>
  )
}

export default SlythDisplay
