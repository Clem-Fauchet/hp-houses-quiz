import React, { Fragment } from 'react'

function GryfDisplay({ house, image, quote, description, restart }) {
  return (
    <Fragment>
      <button className='btn btn-restart' onClick={restart}>
        Restart Quiz
      </button>
      <div className='house' style={{ backgroundColor: '#a22323' }}>
        <img src={image} alt='poster house' />
        <h2>Congrats you belong to {house}! </h2>
        <div className='bloc' style={{ backgroundColor: '#831c1c' }}>
          <span
            className='quote'
            style={{ backgroundColor: '#6f0505', color: 'white' }}
          >
            {quote}
          </span>
          <span
            className='description'
            style={{ backgroundColor: '#6f0505', color: 'white' }}
          >
            {description}
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default GryfDisplay
