interface MenuItemProps {
  name: string
  href: string
  selected: boolean
  onSelect: (name: string) => void
}

function MenuItem({ name, href, selected, onSelect }: MenuItemProps): JSX.Element {
  return (
    <>
      <a
        href={href}
        className={
          'inline-block text-sm font-semibold text-slate-500 transition duration-300 dark:text-white' +
          (selected ? ' -translate-y-1' : ' group-hover:-translate-y-1')
        }
        onClick={() => {
          onSelect(name)
        }}
      >
        {name}
      </a>
      <div
        className={
          'absolute bottom-0 h-[2px] w-0 rounded-full bg-teal-500 opacity-70 transition-all duration-300 dark:bg-teal-400' +
          (selected ? ' w-full' : ' group-hover:w-full')
        }
      ></div>
    </>
  )
}

export default MenuItem
