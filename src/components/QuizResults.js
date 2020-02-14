import React, { useState, useEffect } from 'react'

import quizHouses from '../api/quizHouses'

import GryfDisplay from './GryfDisplay'
import SlythDisplay from './SlythDisplay'
import HuffleDisplay from './HuffleDisplay'
import RavenDisplay from './RavenDisplay'

function QuizResults({ results }) {
  const [houses, setHouses] = useState({
    quizHouses: {},
  })

  useEffect(() => {
    setHouses({ ...houses, quizHouses: quizHouses })
    console.log(quizHouses)
    console.log(results)
  }, [])

  switch (results) {
    case 'Gryffindor':
      return (
        <GryfDisplay
          house={quizHouses[0].house}
          image={quizHouses[0].image}
          quote={quizHouses[0].quote}
          description={quizHouses[0].description}
        />
      )
    case 'Slytherin':
      return (
        <SlythDisplay
          house={quizHouses[1].house}
          image={quizHouses[1].image}
          quote={quizHouses[1].quote}
          description={quizHouses[1].description}
        />
      )
    case 'Hufflepuff':
      return (
        <HuffleDisplay
          house={quizHouses[2].house}
          image={quizHouses[2].image}
          quote={quizHouses[2].quote}
          description={quizHouses[2].description}
        />
      )

    case 'Ravenclaw':
      return (
        <RavenDisplay
          house={quizHouses[3].house}
          image={quizHouses[3].image}
          quote={quizHouses[3].quote}
          description={quizHouses[3].description}
        />
      )
    default:
      return <div>Default</div>
  }
}

export default QuizResults
