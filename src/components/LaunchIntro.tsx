import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SESSION_KEY = 'nb-intro-shown'
const HOLD_MS = 1700
const EXIT_MS = 420

function shouldPlayIntro(pathname: string): boolean {
  if (pathname !== '/') return false

  try {
    if (window.sessionStorage.getItem(SESSION_KEY)) return false

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.sessionStorage.setItem(SESSION_KEY, '1')
      return false
    }

    return true
  } catch {
    return false
  }
}

function LaunchIntro() {
  const location = useLocation()
  const [visible, setVisible] = useState(() => shouldPlayIntro(location.pathname))
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (!visible) return undefined

    try {
      window.sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // Private/blocked storage — the intro still plays once for this mount.
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function triggerExit() {
      setExiting(true)
      window.setTimeout(() => setVisible(false), EXIT_MS)
    }

    const holdTimer = window.setTimeout(triggerExit, HOLD_MS)

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        window.clearTimeout(holdTimer)
        triggerExit()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      window.clearTimeout(holdTimer)
    }
  }, [visible])

  if (!visible) return null

  function handleSkip() {
    if (exiting) return
    setExiting(true)
    window.setTimeout(() => setVisible(false), EXIT_MS)
  }

  return (
    <div
      className={`launch-intro ${exiting ? 'launch-intro--exiting' : ''}`}
      aria-hidden="true"
      onClick={handleSkip}
    >
      <span className="launch-intro__edge"></span>

      <div className="launch-intro__content">
        <span className="launch-intro__signal"></span>
        <p className="launch-intro__mark">Nickel Boyce</p>
        <p className="launch-intro__tagline">Products · Systems · Digital Businesses</p>
      </div>
    </div>
  )
}

export default LaunchIntro
