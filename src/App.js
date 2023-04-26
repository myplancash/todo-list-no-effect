import { useState } from 'react';
import './App.css';
// import Counter from './components/Counter';
import TodoListTest from './components/TodoListTest';


function App() {
  // const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="container">
      {/* <button className='video-button' onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'pause' : 'play'}
      </button> */}
      {/* <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      /> */}
      <TodoListTest />
    </div>
  );
}

export default App;
