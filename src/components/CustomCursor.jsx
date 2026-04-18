import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const trailsRef = useRef([])
  const mousePos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const trailPositions = useRef([])
  const isHovering = useRef(false)
  const TRAIL_LENGTH = 12

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

    const dot = dotRef.current
    const ring = ringRef.current

    // Init off-screen to prevent top-left snap on mount
    ringPos.current = { x: -100, y: -100 }

    // Create trail elements — append directly, no double-append via fragment
    const trails = []
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      trail.style.opacity = (1 - i / TRAIL_LENGTH) * 0.5
      trail.style.width = Math.max(2, 6 - i * 0.4) + 'px'
      trail.style.height = Math.max(2, 6 - i * 0.4) + 'px'
      trailPositions.current.push({ x: -100, y: -100 })
      document.body.appendChild(trail)
      trails.push(trail)
    }
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
        target.dataset.hover !== undefined
      ) {
        isHovering.current = true
        dot.classList.add('hovering')
        ring.classList.add('hovering')
      }
    }

    const handleMouseOut = () => {
      isHovering.current = false
      dot.classList.remove('hovering')
      ring.classList.remove('hovering')
    }

    let animFrame
    const animate = () => {
      const { x, y } = mousePos.current

      // Combine translate + scale in JS so CSS .hovering scale isn't overridden
      const scale = isHovering.current ? 2.5 : 1
      dot.style.transform = 'translate(' + (x - 4) + 'px, ' + (y - 4) + 'px) scale(' + scale + ')'

      // Ring with smooth lerp
      ringPos.current.x += (x - ringPos.current.x) * 0.15
      ringPos.current.y += (y - ringPos.current.y) * 0.15
      ring.style.transform = 'translate(' + (ringPos.current.x - 18) + 'px, ' + (ringPos.current.y - 18) + 'px)'

      // Trail
      trailPositions.current.unshift({ x, y })
      trailPositions.current = trailPositions.current.slice(0, TRAIL_LENGTH)
      trailsRef.current.forEach((trail, i) => {
        const pos = trailPositions.current[i] || { x, y }
        trail.style.transform = 'translate(' + (pos.x - 3) + 'px, ' + (pos.y - 3) + 'px)'
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
      trailsRef.current = []
      trailPositions.current = []
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
