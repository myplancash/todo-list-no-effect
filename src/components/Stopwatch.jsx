import { useState, useRef } from 'react'

const Stopwatch = () => {

  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null) 

  const inputRef = useRef(null)
  
  const handleStart = () => {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)

  }

  const handleStop = () => {
    clearInterval(intervalRef.current)
  }

  const handleInput = () => {
    inputRef.current.focus()
  }

  
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000 
  } 


  return (
    <div>
      <h1>Tiempo Transcurrido: {secondsPassed.toFixed(3)}</h1>
      <button className='buttonRef' onClick={handleStart}>
        Start
      </button>
      <button className='buttonRef' onClick={handleStop}>
        Stop
      </button>


      <input 
        type="text" 
        ref={inputRef} 
      />
      <button onClick={handleInput}>focus the input</button>
    </div>
  )
}

export default Stopwatch