import { useEffect, useState } from "react"

export const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined"

  const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : 0
    const height = hasWindow ? window.innerHeight : 0
    return {
      width,
      height,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions())
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}