import { useEffect, useState } from 'react'
import { type JSX } from 'react/jsx-runtime'

function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  const toggleTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      className="absolute left-[50%] top-[50%] h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-950 transition-all duration-1000"
      onClick={toggleTheme}
    >
      <div className="relative h-[90%] w-8 rounded-full bg-yellow-300 shadow-[0_0_100px_rgba(249,240,104,1)] transition-all duration-1000 dark:ml-24 dark:bg-gray-100 dark:shadow-[0_0_100px_rgba(255,255,255,1)]">
        <div className="absolute left-5 top-12 h-3 w-3 rounded-full bg-gray-300/50 opacity-0 transition-all duration-1000 dark:opacity-100"></div>
        <div className="absolute left-10 top-14 h-3 w-3 rounded-full bg-gray-300/50 opacity-0 transition-all duration-1000 dark:opacity-100"></div>
        <div className="absolute left-10 top-6 h-5 w-5 rounded-full bg-gray-300/50 opacity-0 transition-all duration-1000 dark:opacity-100"></div>
      </div>
    </button>
  )
}

export default ThemeToggle
