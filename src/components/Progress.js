import React from 'react'

function Progress({ questionId, total }) {
  return (
    <div className='progress'>
      Question {questionId} / {total}
    </div>
  )
}

export default Progress
