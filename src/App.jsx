import { useState } from 'react'


const StatisticLine = ({ text, value }) => {

  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({ g, n, b }) => {
  
  const total = g+n+b
  const avg = (g*1+n*0+b*-1)/total

  if (total !== 0) {
    return (
      <section>
        <StatisticLine text="Good" value={g}/>
        <StatisticLine text="Neutral" value={n}/>
        <StatisticLine text="Bad" value={b}/>
        <StatisticLine text="Total" value={total}/>
        <StatisticLine text="Average" value={avg}/>
        <StatisticLine text="Positive %" value={g*100/total}/>
      </section>
    )
  }
    return (
      <p>No feedback given</p>
    )

}

const Button = ({ onClick, text }) => {
  
  return (
    <button onClick={onClick}>{text}</button>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    // console.log(good)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    // console.log(neutral)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    // console.log(bad)
  }


  return (
    <div>
      <main>
        <h2>Give Feedback</h2>
        <Button onClick={handleGoodClick} text='Good'/>
        <Button onClick={handleNeutralClick} text='Neutral'/>
        <Button onClick={handleBadClick} text='Bad'/>
        <h2>Statistics</h2>
        <Statistics g={good} n={neutral} b={bad}/>
      </main>
    </div>
  )
}

export default App

