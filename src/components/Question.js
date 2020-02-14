import React from 'react'

function Question({ question, image }) {
  return (
    <div className='questions'>
      <img src={image} alt='background poster' />
      <div className='question'>
        <h2>{question}</h2>
      </div>
    </div>
  )
}

export default Question
