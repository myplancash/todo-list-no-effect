import React, { useState } from 'react'

const StateAndPropsChanges = ({items}) => {
  const [isReverse, setIsReverse] = useState(false)
  const [selection, setSelection] = useState(null)

  return (
    <div>StateAndPropsChanges</div>
  )
}

export default StateAndPropsChanges 