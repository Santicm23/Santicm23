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
      className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-950 p-[5%] transition-all duration-1000"
      onClick={toggleTheme}
    >
      <div className="relative h-7 w-7 rounded-full bg-yellow-300 transition-all duration-1000 dark:ml-[57%] dark:bg-gray-100">
        <div className="absolute left-1/4 top-1/2 h-1/5 w-1/5 rounded-full bg-gray-300/50 opacity-0 transition-all duration-1000 dark:opacity-100"></div>
        <div className="absolute left-1/2 top-2/3 h-1/5 w-1/5 rounded-full bg-gray-300/50 opacity-0 transition-all duration-1000 dark:opacity-100"></div>
        <div className="absolute left-1/2 top-1/4 h-1/3 w-1/3 rounded-full bg-gray-300/50 opacity-0 transition-all duration-1000 dark:opacity-100"></div>
      </div>
    </button>
  )
}

export default ThemeToggle
