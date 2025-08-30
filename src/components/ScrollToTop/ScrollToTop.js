import React, { useContext, useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // function to scroll up
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return isVisible ? (
    <div className="scroll-top">
      {/* Scroll to top button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="btn btn--icon scroll-btn"
        aria-label="scroll to top"
      >
        <ArrowUpwardIcon />
      </button>

      {/* Theme toggle button */}
      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </div>
  ) : null
}

export default ScrollToTop
