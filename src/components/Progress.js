import React from 'react'

function Progress({ current, total, previous, answer }) {
  return (
    <div className='progress'>
      {current !== 1 ? (
        <button
          className='btn btn-previous'
          onClick={previous}
          value={answer}
        ></button>
      ) : null}
      <h2>
        Question {current} / {total}
      </h2>
    </div>
  )
}

export default Progress
