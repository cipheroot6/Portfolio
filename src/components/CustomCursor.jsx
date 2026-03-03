import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const trailsRef = useRef([])
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const trailPositions = useRef([])
  const TRAIL_LENGTH = 12

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

    const dot = dotRef.current
    const ring = ringRef.current

    // Create trail elements
    const trailContainer = document.createDocumentFragment()
    const trails = []
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      trail.style.opacity = (1 - i / TRAIL_LENGTH) * 0.5
      trail.style.width = `${Math.max(2, 6 - i * 0.4)}px`
      trail.style.height = `${Math.max(2, 6 - i * 0.4)}px`
      trails.push(trail)
      trailContainer.appendChild(trail)
      trailPositions.current.push({ x: -100, y: -100 })
    }
    document.body.appendChild(trailContainer)
    // Save references after appending
    trails.forEach(t => document.body.appendChild(t))
    trailsRef.current = trails

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.hover
      ) {
        dot.classList.add('hovering')
        ring.classList.add('hovering')
      }
    }

    const handleMouseOut = () => {
      dot.classList.remove('hovering')
      ring.classList.remove('hovering')
    }

    let animFrame
    const animate = () => {
      // Dot follows instantly
      dot.style.transform = `translate(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px)`

      // Ring follows with smooth lerp
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15
      ring.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`

      // Update trail
      trailPositions.current.unshift({ ...mousePos.current })
      trailPositions.current = trailPositions.current.slice(0, TRAIL_LENGTH)

      trailsRef.current.forEach((trail, i) => {
        const pos = trailPositions.current[i] || mousePos.current
        trail.style.transform = `translate(${pos.x - 3}px, ${pos.y - 3}px)`
      })

      animFrame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    animFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animFrame)
      trailsRef.current.forEach(t => t.remove())
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
