import React, { useState, useEffect } from 'react'

import quizHouses from '../api/quizHouses'
import '../styles/Results.scss'

import GryfDisplay from './GryfDisplay'
import SlythDisplay from './SlythDisplay'
import HuffleDisplay from './HuffleDisplay'
import RavenDisplay from './RavenDisplay'

function QuizResults({ results, restart }) {
  const [houses, setHouses] = useState({
    quizHouses: {},
  })

  useEffect(() => {
    setHouses({ ...houses, quizHouses: quizHouses })
  }, [])

  switch (results) {
    case 'Gryffindor':
      return (
        <GryfDisplay
          house={quizHouses[0].house}
          image={quizHouses[0].image}
          quote={quizHouses[0].quote}
          description={quizHouses[0].description}
          restart={restart}
        />
      )
    case 'Slytherin':
      return (
        <SlythDisplay
          house={quizHouses[1].house}
          image={quizHouses[1].image}
          quote={quizHouses[1].quote}
          description={quizHouses[1].description}
          restart={restart}
        />
      )
    case 'Hufflepuff':
      return (
        <HuffleDisplay
          house={quizHouses[2].house}
          image={quizHouses[2].image}
          quote={quizHouses[2].quote}
          description={quizHouses[2].description}
          restart={restart}
        />
      )

    case 'Ravenclaw':
      return (
        <RavenDisplay
          house={quizHouses[3].house}
          image={quizHouses[3].image}
          quote={quizHouses[3].quote}
          description={quizHouses[3].description}
          restart={restart}
        />
      )
    default:
      return <div>Default</div>
  }
}

export default QuizResults
