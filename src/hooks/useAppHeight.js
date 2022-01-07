import { useEffect, useState } from 'react'

const getWindowHeight = () => {
  return window.innerHeight
}

export const useAppHeight = () => {
  const handleResize = () => {
    setHeight(getWindowHeight())
  }
  const [height, setHeight] = useState(getWindowHeight)

  useEffect(() => {
    window.addEventListener('load', handleResize)
    return () => {
      window.removeEventListener('load', handleResize)
    }
  })
  return height
}
