import React, { useState, useEffect } from 'react'

import './styles/App.scss'
import quizQuestions from './api/quizQuestions'
import Quiz from './components/Quiz'

function App() {
  const [state, setState] = useState({
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    image: '',
  })

  const [currentAnswer, setCurrentAnswer] = useState({
    answersCount: {},
  })

  useEffect(() => {
    const shuffledArray = (array) => {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }

    const shuffledAnswerOptions = quizQuestions.map((question) =>
      shuffledArray(question.answers)
    )

    setState({
      ...state,
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
      image: quizQuestions[0].image,
    })
  }, [])

  const selectedAnswer = (e) => {
    setUserAnswer(e.currentTarget.value)
    setTimeout(() => setNextQuestion(), 300)
  }

  const setNextQuestion = () => {
    const counter = state.counter + 1

    setState({
      ...state,
      counter: counter,
      questionId: state.questionId + 1,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      image: quizQuestions[counter].image,
      answer: '',
    })
  }

  const setUserAnswer = (answer) => {
    setCurrentAnswer((prevState) => ({
      answersCount: {
        ...prevState.answersCount,
        [answer]: (currentAnswer.answersCount[answer] || 0) + 1,
      },
    }))

    setState({
      ...state,
      answer: [answer],
    })
    console.log(currentAnswer)
    console.log(currentAnswer.answersCount)
  }

  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>
          <h1>Which Hogwarts house do you belong to?</h1>
        </div>
        <div className='houses'></div>
      </div>

      <div className='quiz-container'>
        <Quiz
          answer={state.answer}
          answerOptions={state.answerOptions}
          questionId={state.questionId}
          question={state.question}
          questionTotal={quizQuestions.length}
          selectedAnswer={selectedAnswer}
          image={state.image}
        />
      </div>
    </div>
  )
}

export default App
