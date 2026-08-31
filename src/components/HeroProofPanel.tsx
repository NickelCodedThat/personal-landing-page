import { useEffect, useState } from 'react'
import { proofStates } from '../data/proof'

const DWELL_MS = 7000
const FADE_MS = 320

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')

    function handleChange(event: MediaQueryListEvent) {
      setReduced(event.matches)
    }

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  return reduced
}

function HeroProofPanel() {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const paused = hovered || focused

  useEffect(() => {
    if (prefersReducedMotion || paused) return undefined

    const intervalId = window.setInterval(() => {
      setFading(true)

      window.setTimeout(() => {
        setIndex((current) => (current + 1) % proofStates.length)
        setFading(false)
      }, FADE_MS)
    }, DWELL_MS)

    return () => window.clearInterval(intervalId)
  }, [paused, prefersReducedMotion])

  function selectState(nextIndex: number) {
    if (nextIndex === index) return

    setFading(true)
    window.setTimeout(() => {
      setIndex(nextIndex)
      setFading(false)
    }, FADE_MS)
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setFocused(false)
    }
  }

  const state = proofStates[index]

  return (
    <div
      className="hero-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={handleBlur}
    >
      <p className="hero-card__label">{state.eyebrow}</p>

      <div
        className={`hero-card__body ${
          fading ? 'hero-card__body--fading' : ''
        }`}
      >
        <h2 className="hero-card__title">{state.title}</h2>

        <p className="hero-card__text">{state.text}</p>

        <div className="hero-card__meta">
          {state.meta.map((entry) => (
            <div key={entry.label}>
              <span>{entry.label}</span>
              <strong>{entry.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div
        className="hero-card__dots"
        role="group"
        aria-label="Proof of work states"
      >
        {proofStates.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            className={`hero-card__dot ${
              itemIndex === index ? 'hero-card__dot--active' : ''
            }`}
            aria-label={`Show ${item.eyebrow.toLowerCase()}`}
            aria-current={itemIndex === index}
            onClick={() => selectState(itemIndex)}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroProofPanel
