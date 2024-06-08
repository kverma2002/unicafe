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
    <tr>
      <td>{name}</td> 
      <td>{counter}</td>
    </tr>
  )
}

const All = ({total}) => <tr><td>all</td><td>{total}</td></tr>

const Avg = ({good, neut, bad}) => <tr><td>average</td><td>{(good* 1 + bad * -1)/(good + bad + neut)}</td></tr>

const Pos = ({good, neut, bad}) => <tr><td>positive</td><td>{(good)/(good + bad + neut) * 100}%</td></tr>

const Statistics = ({good, neut, bad}) => {
  if (good + bad + neut > 0) {
    return (
      <table>
        <tbody>
          <Stats name="good" counter={good}/>
          <Stats name="neutral" counter={neut}/>
          <Stats name="bad" counter={bad}/>
          <All total={good+neut+bad}/>
          <Avg good={good} neut={neut} bad={bad}/>
          <Pos good={good} neut={neut} bad={bad}/>
        </tbody>
      </table>
    )
  }
  else {
    return (
      <div>No feedback given</div>
    )
  }
  
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

      <Statistics good={good} neut={neutral} bad={bad}/>


    </div>
    

  )
}

export default App