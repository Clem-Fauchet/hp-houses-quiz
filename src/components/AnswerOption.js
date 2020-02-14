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
        {answer}
      </label>
    </li>
  )
}

export default AnswerOption
