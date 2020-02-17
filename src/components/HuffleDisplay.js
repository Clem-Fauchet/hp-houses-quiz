import React, { Fragment } from 'react'

function HuffleDisplay({ house, image, quote, description, restart }) {
  return (
    <Fragment>
      <button className='btn btn-restart' onClick={restart}>
        Restart Quiz
      </button>
      <div className='house' style={{ backgroundColor: '#a29d23' }}>
        <img src={image} alt='poster house' />
        <h2>Congrats you belong to {house}! </h2>
        <div className='bloc' style={{ backgroundColor: '#9a963d' }}>
          <span
            className='quote'
            style={{ backgroundColor: '#252521', color: 'white' }}
          >
            {quote}
          </span>
          <span
            className='description'
            style={{ backgroundColor: '#252521', color: 'white' }}
          >
            {description}
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default HuffleDisplay
