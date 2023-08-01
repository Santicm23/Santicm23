import { type JSX } from 'react/jsx-runtime'

import { Name, Avatar, ThemeToggle } from './components'

function App(): JSX.Element {
  return (
    <div className="absolute top-0 h-max min-h-screen w-full bg-amber-500 dark:bg-gray-700">
      <header className="fixed top-0">
        <nav className="bg-white/30 backdrop-blur-sm">
          <ul className="flex justify-center">
            <li className="ml-4 mr-4 rounded-full px-4 py-2 hover:bg-indigo-400">
              <a href="#about">About</a>
            </li>
            <li className="ml-4 mr-4 rounded-full px-4 py-2 hover:bg-indigo-400">
              <a href="#projects">Projects</a>
            </li>
            <li className="ml-4 mr-4 rounded-full px-4 py-2 hover:bg-indigo-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <Name name="Santiago Castro Muñoz" />
      <Avatar />
      <ThemeToggle />
      <img
        src="https://f2.toyhou.se/file/f2-toyhou-se/images/49926419_9WCKXyJZMNuD9Go.gif"
        alt=""
      />
    </div>
  )
}

export default App
