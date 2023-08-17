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
      className="absolute right-4 top-1 aspect-[2/1] h-8 rounded-full bg-slate-900 [&_*]:rounded-full [&_*]:transition-all [&_*]:duration-500"
      onClick={toggleTheme}
    >
      <div className="absolute left-[5%] top-[10%] aspect-square h-[80%] bg-yellow-300 dark:ml-[50%] dark:bg-gray-100">
        <div className="absolute left-1/4 top-1/2 h-1/5 w-1/5 dark:bg-gray-300"></div>
        <div className="absolute left-1/2 top-2/3 h-1/5 w-1/5 dark:bg-gray-300"></div>
        <div className="absolute left-1/2 top-1/4 h-1/3 w-1/3 dark:bg-gray-300"></div>
      </div>
    </button>
  )
}

export default ThemeToggle
