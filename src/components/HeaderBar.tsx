import { type JSX } from 'react/jsx-runtime'
import { ThemeToggle } from '.'

function HeaderBar(): JSX.Element {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="bg-white/20 backdrop-blur-sm">
        <ul className="flex justify-center">
          <li className="ml-4 mr-4 rounded-full px-[5%] py-2 hover:bg-indigo-400">
            <a href="#about">About</a>
          </li>
          <li className="ml-4 mr-4 rounded-full px-[5%] py-2 hover:bg-indigo-400">
            <a href="#projects">Projects</a>
          </li>
          <li className="ml-4 mr-4 rounded-full px-[5%] py-2 hover:bg-indigo-400">
            <a href="#contact">Contact</a>
          </li>
          <li className="flex h-10 w-20 items-center">
            <ThemeToggle h="90%" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderBar
