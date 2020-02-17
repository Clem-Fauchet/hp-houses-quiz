import React, { Fragment } from 'react'

function HuffleDisplay({ house, image, quote, description, restart }) {
  return (
    <Fragment>
      <button className='btn btn-restart' onClick={restart}>
        Restart Quiz
      </button>
      <div className='house'>
        <img src={image} alt='poster house' />
        <h2>Congrats you belong to {house}! </h2>
        <div className='bloc'>
          <span className='quote'>{quote}</span>
          <span className='description'>{description}</span>
        </div>
      </div>
    </Fragment>
  )
}

export default HuffleDisplay
