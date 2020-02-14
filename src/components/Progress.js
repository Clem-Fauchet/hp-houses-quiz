import React from 'react'

function Progress({ current, total }) {
  return (
    <div className='progress'>
      Question {current} / {total}
    </div>
  )
}

export default Progress
