import React from 'react'

function AnswerOption({ answerType, answerContent, answer }) {
  return (
    <li className='answer'>
      <input
        type='radio'
        className='radioButton'
        id={answerType}
        value={answerType}
      />
      <label className='radioLabel' htmlFor={answerType}>
        {answerContent}
      </label>
    </li>
  )
}

export default AnswerOption
