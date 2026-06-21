import { useEffect, useRef, useState } from 'react'

export const useInView = (options = { threshold: 0.1, triggerOnce: false }) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (options.triggerOnce) {
          observer.unobserve(entry.target)
        }
      } else if (!options.triggerOnce) {
        setInView(false)
      }
    }, {
      threshold: options.threshold || 0.1
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options.threshold, options.triggerOnce])

  return { ref, inView }
}
