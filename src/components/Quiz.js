import React, { Fragment } from 'react'
import '../styles/Quiz.scss'

import Progress from './Progress'
import Question from './Question'
import AnswerOption from './AnswerOption'

function Quiz(props) {
  return (
    <Fragment>
      <Progress
        current={props.questionId}
        total={props.questionTotal}
        previous={props.previous}
      />

      <Question
        question={props.question}
        image={props.image}
        answer={props.answer}
      />

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
    </Fragment>
  )
}

export default Quiz
