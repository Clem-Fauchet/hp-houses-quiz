import React, { useState, useEffect } from 'react'

import './styles/App.scss'
import quizQuestions from './api/quizQuestions'
import Quiz from './components/Quiz'
import QuizResults from './components/QuizResults'

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

  const [stateResult, setStateResult] = useState({
    result: '',
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
      answer: state.answer,
    })
  }, [])

  const selectedAnswer = (e) => {
    setUserAnswer(e.currentTarget.value)

    if (state.questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300)
    } else {
      setTimeout(() => setResults(getResults()), 300)
    }
  }

  const setNextQuestion = () => {
    const counter = state.counter + 1

    setState((prevState) => ({
      ...state,
      counter: counter,
      questionId: state.questionId + 1,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      image: quizQuestions[counter].image,
      answer: prevState.answer,
    }))
  }

  const previousQuestion = (answer) => {
    const counter = state.counter - 1

    if (counter > -1) {
      setState((prevState) => ({
        ...state,
        counter: counter,
        questionId: state.questionId - 1,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        image: quizQuestions[counter].image,
      }))

      setCurrentAnswer((prevState) => ({
        answersCount: {
          ...prevState.answersCount,
          [state.answer]: (currentAnswer.answersCount[state.answer] || 0) - 1,
        },
      }))

      setStateResult({
        ...stateResult,
        result: '',
      })
    }
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
  }

  const getResults = () => {
    const answersCount = currentAnswer.answersCount
    const answersCountKeys = Object.keys(answersCount)
    const answersCountValues = answersCountKeys.map((key) => answersCount[key])
    const maxAnswerCount = Math.max.apply(null, answersCountValues)

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    )
  }

  const setResults = (result) => {
    setStateResult({ ...stateResult, result: result[0] })
  }

  const restart = () => {
    setState({
      ...state,
      counter: 0,
      questionId: 1,
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers,
      image: quizQuestions[0].image,
      answer: '',
    })
    setCurrentAnswer({
      ...currentAnswer,
      answersCount: {},
    })
    setStateResult({
      ...stateResult,
      result: '',
    })
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
        {stateResult.result ? (
          <QuizResults results={stateResult.result} restart={restart} />
        ) : (
          <Quiz
            answer={state.answer}
            answerOptions={state.answerOptions}
            questionId={state.questionId}
            question={state.question}
            questionTotal={quizQuestions.length}
            selectedAnswer={selectedAnswer}
            image={state.image}
            previous={previousQuestion}
          />
        )}
      </div>
    </div>
  )
}

export default App
