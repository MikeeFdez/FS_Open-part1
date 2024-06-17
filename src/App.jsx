import { useState } from 'react'




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const max_length = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(max_length).fill(0))

  const handleClick = () => {
    setSelected(Math.trunc(Math.random()*8))
  }

  const handleVoteClick = () => {
    const updatedPoints = [...points]
    updatedPoints[selected] += 1
    setPoints(updatedPoints)
  }
  
  function maxVotedQuote() {
    let max = 0
    for (let num of points) {
      if (max < num)
        max = num
    }
    return max
  }



  return (
    <main>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{ anecdotes[points.indexOf(maxVotedQuote())] }</p>
    </main>
  )
}

export default App