import React, { Fragment } from 'react'

function RavenDisplay({ house, image, quote, description, restart }) {
  return (
    <Fragment>
      <button className='btn btn-restart' onClick={restart}>
        Restart Quiz
      </button>
      <div className='house' style={{ backgroundColor: '#2348a8' }}>
        <img src={image} alt='poster house' />
        <h2>Congrats you belong to {house}! </h2>
        <div className='bloc' style={{ backgroundColor: '#1d3b8a' }}>
          <span
            className='quote'
            style={{ backgroundColor: '#261e48', color: 'white' }}
          >
            {quote}
          </span>
          <span
            className='description'
            style={{ backgroundColor: '#261e48', color: 'white' }}
          >
            {description}
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default RavenDisplay
