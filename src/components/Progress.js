import React from 'react'

function Progress({ current, total }) {
  return (
    <div className='progress'>
      <h2>
        Question {current} / {total}
      </h2>
    </div>
  )
}

export default Progress
