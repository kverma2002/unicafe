import { useState } from 'react'

const Button = ({name, handleClick}) => {
  return (
    <button onClick={handleClick}>
    {name}
    </button>
  )
}

const Stats = ({name, counter}) => {
  return (
    <div>
      {name} {counter}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)
  

  return (
    <div>
      <h1>
        give feedback
      </h1>

      <div>
        <Button name="good" handleClick={handleGoodClick}/>
        <Button name="neutral" handleClick={handleNeutralClick}/>
        <Button name="bad" handleClick={handleBadClick}/>
      </div>

      <h1>
        statistics
      </h1>

      <div>
        <Stats name="good" counter={good}/>
        <Stats name="neutral" counter={neutral}/>
        <Stats name="bad" counter={bad}/>
      </div>

    </div>
    

  )
}

export default App