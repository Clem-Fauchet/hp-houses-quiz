import React from 'react'

function Progress({ current, total, previous, answer }) {
  return (
    <div className='progress'>
      <button
        className='btn btn-previous'
        onClick={previous}
        value={answer}
      ></button>
      <h2>
        Question {current} / {total}
      </h2>
    </div>
  )
}

export default Progress
