import React from 'react'

function AnswerOption({ answerType, answerContent, answer, selectedAnswer }) {
  return (
    <li className='answer'>
      <input
        type='radio'
        className='radioButton'
        checked={answerType === answer}
        id={answerType}
        value={answerType}
        onChange={selectedAnswer}
      />
      <label className='radioLabel' htmlFor={answerType}>
        {answerContent}
      </label>
    </li>
  )
}

export default AnswerOption
