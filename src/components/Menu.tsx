import { useState } from 'react'
import { ThemeToggle } from '.'
import MenuItem from './MenuItme'

const menu = [
  { name: 'Home', href: '#home', selected: true },
  { name: 'About', href: '#about', selected: false },
  { name: 'Projects', href: '#projects', selected: false },
  { name: 'Contact', href: '#contact', selected: false },
]

function Menu(): JSX.Element {
  const [, setMenu] = useState(menu)

  const onSelect = (name: string): void => {
    menu.forEach(item => {
      if (item.name === name) {
        item.selected = true
        console.log('changed')
      } else {
        item.selected = false
      }
    })
    setMenu({ ...menu })
  }

  return (
    <header className="fixed z-20 h-16 w-full bg-white/70 backdrop-blur-sm dark:bg-gray-800/40">
      <nav className="m-auto flex h-full w-2/3 items-center px-1">
        <a href="#home" className="flex w-full items-center">
          <img src="./logo.svg" alt="logo" className="h-10" />
          <p className="hidden bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent md:block">
            &nbsp;Santicm
          </p>
        </a>
        <ul className="flex w-1/2 items-center gap-4">
          {menu.map(({ name, href, selected }) => (
            <li key={name} className="group relative flex flex-col items-center">
              <MenuItem name={name} href={href} selected={selected} onSelect={onSelect} />
            </li>
          ))}
        </ul>
        <ThemeToggle className="flex justify-end" />
      </nav>
    </header>
  )
}

export default Menu
