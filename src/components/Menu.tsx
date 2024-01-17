import { useState } from 'react'

import { ThemeToggle, Title, MenuItem } from '.'

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
    <>
      <header
        id="menu"
        className="fixed z-20 h-16 w-full animate-slide-in-top bg-slate-50/60 backdrop-blur-xl dark:bg-gray-950/60"
      >
        <nav className="m-auto flex h-full w-2/3 items-center justify-between px-1 md:gap-0">
          <Title />
          <ul className="hidden w-1/2 items-center gap-4 self-center px-4 sm:flex">
            {menu.map(data => (
              <li key={data.name} className="group relative flex flex-col items-center">
                <MenuItem {...data} onSelect={onSelect} />
              </li>
            ))}
          </ul>
          <ThemeToggle className="flex justify-end" />
        </nav>
      </header>
      <div className="h-16 bg-slate-50 dark:bg-gray-950"></div>
      <hr className="border-slate-200 dark:border-slate-800" />
    </>
  )
}

export default Menu
