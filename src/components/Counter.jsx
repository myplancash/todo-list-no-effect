import {useRef } from 'react'


const Counter = () => {
  const ref = useRef(0)

  const handleClick = () => {
    ref.current = ref.current + 1
    alert('haz hecho click ' + ref.current + ' veces') 
  }

  return (
    <div className='wrapper'>
      <button 
        className='buttonRef'
        onClick={handleClick}>
          Counter Clicks
      </button>
    </div>
  )
}

export default Counter