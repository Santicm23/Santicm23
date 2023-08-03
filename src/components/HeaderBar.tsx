import { type JSX } from 'react/jsx-runtime'

function HeaderBar(): JSX.Element {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="bg-indigo-500/50 backdrop-blur-sm">
        <ul className="flex justify-center [&>*:hover]:bg-indigo-400">
          <li className="ml-4 mr-4 rounded-full px-4 py-2">
            <a href="#about">About</a>
          </li>
          <li className="ml-4 mr-4 rounded-full px-4 py-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="ml-4 mr-4 rounded-full px-4 py-2 ">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderBar
