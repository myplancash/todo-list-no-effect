import { forwardRef, useImperativeHandle, useRef } from 'react';

const MyInputRef = forwardRef((props, ref) => {
  const realInputRef = useRef(null)

  useImperativeHandle(ref, () => ({
      focus() {
        realInputRef.current.focus()
      }
  }))

  return <input {...props} ref={realInputRef}/>
})

export default function MyForm() { 
  const inputRef = useRef(null);

  function handleClick(e) {
    inputRef.current.focus();
    console.log(e.target.value);
  }

  return (
    <>
      <MyInputRef ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  )
}