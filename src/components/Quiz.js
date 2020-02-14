import React from 'react'
import '../styles/Quiz.scss'

import Progress from './Progress'
import Question from './Question'
import AnswerOption from './AnswerOption'

function Quiz(props) {
  return (
    <div className='quiz-container'>
      <Progress current={props.questionId} total={props.questionTotal} />

      <Question question={props.question} image={props.image} />

      <ul className='answersOption'>
        {props.answerOptions.map((key) => {
          return (
            <AnswerOption
              key={key.content}
              answerContent={key.content}
              answerType={key.type}
              answer={props.answer}
              questionId={props.questionId}
              selectedAnswer={props.selectedAnswer}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Quiz
