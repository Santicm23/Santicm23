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
    <header className="fixed z-20 w-full bg-white/40 backdrop-blur-sm dark:bg-slate-500/40">
      <nav className="m-auto flex w-2/3 items-center px-1">
        <a href="#home" className="flex w-full items-center self-start">
          <img src="./favicon.ico" alt="logo" className="h-10" />
          <p className="hidden text-3xl font-bold text-[#5FCEBD] md:block">&nbsp;Santicm</p>
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
