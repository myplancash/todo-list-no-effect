import React, { useRef } from 'react'

const VideoPlayer = ({src, isPlaying}) => {
  const ref = useRef(null)

  React.useEffect(() => {
    if(isPlaying) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }, [isPlaying])

  return <video src={src} ref={ref}></video>
}

export default VideoPlayer