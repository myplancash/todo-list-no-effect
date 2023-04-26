import React from 'react'
import { flushSync } from 'react-dom';

// Flushing state updates synchronously with flushSync 
import { useState, useRef } from 'react';

export default function TodoList() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(initialTodos);
  const listRef = useRef(null);

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText('');
      setTodos([...todos, newTodo]);
    })
    listRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }

  return (
    <div>
      <button onClick={handleAdd}>
        Add
      </button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <ul ref={listRef}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );

}

let nextId = 0;
let initialTodos = [];
for(let i= 0; i < 19; i++) {

  initialTodos.push({
    id: nextId++,
    text: 'Todo # ' + (nextId + 1)
  })
}