// import { useEffect, useState } from 'react'

interface ThemeToggleProps {
  className?: string
}

function toggleTheme(): void {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
}

function setSystemTheme(): void {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
}

function ThemeToggle({ className = '' }: ThemeToggleProps): JSX.Element {
  setSystemTheme()

  return (
    <div className={className}>
      <button
        className="relative aspect-[2/1] h-8 rounded-full bg-slate-900 shadow-inner shadow-violet-300/70 dark:shadow-violet-950 [&_*]:rounded-full [&_*]:transition-all [&_*]:duration-500"
        onClick={toggleTheme}
      >
        <div className="absolute left-[5%] top-[10%] aspect-square h-[80%] bg-yellow-300 dark:ml-[50%] dark:bg-gray-100">
          <div className="absolute left-1/4 top-1/2 h-1/5 w-1/5 dark:bg-gray-300"></div>
          <div className="absolute left-1/2 top-2/3 h-1/5 w-1/5 dark:bg-gray-300"></div>
          <div className="absolute left-1/2 top-1/4 h-1/3 w-1/3 dark:bg-gray-300"></div>
        </div>
      </button>
    </div>
  )
}

export default ThemeToggle
