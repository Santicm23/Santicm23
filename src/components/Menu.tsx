import { type JSX } from 'react/jsx-runtime'
import { ThemeToggle } from '.'

function Menu(): JSX.Element {
  return (
    <header className="fixed z-50 w-full">
      <nav className="bg-white/40 backdrop-blur-sm dark:bg-white/10">
        <ul className="flex justify-center [&>*>*]:font-semibold [&>*>*]:text-cyan-800 dark:[&>*>*]:text-cyan-200">
          <li className="ml-4 mr-4 rounded-full px-[5%] py-2">
            <a href="#about">About</a>
          </li>
          <li className="ml-4 mr-4 rounded-full px-[5%] py-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="ml-4 mr-4 rounded-full px-[5%] py-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default Menu
