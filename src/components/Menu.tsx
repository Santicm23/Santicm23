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
      <nav className="flex items-center justify-between bg-white/40 px-1 backdrop-blur-sm dark:bg-slate-500/40">
        <a href="#home" className="flex w-1/12 items-center">
          <img src="./favicon.ico" alt="logo" className="h-10" />
          <p className="hidden text-3xl font-bold text-[#5FCEBD] md:block">&nbsp;Santicm</p>
        </a>
        <ul className="flex w-1/2 items-center justify-around gap-10">
          {menu.map(({ name, href }) => (
            <li key={name} className="group relative flex flex-col items-center">
              <a
                href={href}
                className="inline-block font-semibold text-cyan-800 transition duration-300 group-hover:-translate-y-1 dark:text-cyan-200"
              >
                {name}
              </a>
              <div className="absolute -bottom-1 h-1 w-0 rounded-full bg-cyan-800 opacity-70 transition-all duration-300 group-hover:w-full dark:bg-cyan-200"></div>
            </li>
          ))}
        </ul>
        <ThemeToggle className="flex w-1/12 justify-end" />
      </nav>
    </header>
  )
}

export default Menu
