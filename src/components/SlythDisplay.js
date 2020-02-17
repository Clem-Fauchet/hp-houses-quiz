import React, { Fragment } from 'react'

function SlythDisplay({ house, image, quote, description, restart }) {
  return (
    <Fragment>
      <button className='btn btn-restart' onClick={restart}>
        Restart Quiz
      </button>
      <div className='house' style={{ backgroundColor: '#3a923f' }}>
        <img src={image} alt='poster house' />
        <h2>Congrats you belong to {house}! </h2>
        <div className='bloc' style={{ backgroundColor: '#29732d' }}>
          <span
            className='quote'
            style={{ backgroundColor: '#17481a', color: 'white' }}
          >
            {quote}
          </span>
          <span
            className='description'
            style={{ backgroundColor: '#17481a', color: 'white' }}
          >
            {description}
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default SlythDisplay
