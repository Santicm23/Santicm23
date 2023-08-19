import { type JSX } from 'react/jsx-runtime'
import { ThemeToggle } from '.'

const menu = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function Menu(): JSX.Element {
  return (
    <header className="fixed z-20 w-full">
      <nav className="flex justify-around bg-white/40 backdrop-blur-sm dark:bg-slate-500/40">
        <a href="#home" className="flex items-center">
          <img src="./favicon.ico" alt="logo" className="h-10" />
          <p className="text-3xl font-bold text-[#5FCEBD]">&nbsp;Santicm</p>
        </a>
        <ul className="flex list-none items-center gap-10 pr-10">
          {menu.map(({ name, href }) => (
            <li key={name} className="">
              <a href={href} className="font-semibold text-cyan-800 dark:text-cyan-200">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default Menu
