interface Props {
  path: string
  bgColor: string
  href: string
}

export default function SocialButton({ path, bgColor, href }: Props): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-square w-[45px] cursor-pointer items-center justify-center rounded-lg border-none bg-transparent transition-all duration-300"
    >
      <span className="flex h-full w-full items-center justify-center rounded-lg border border-neutral-400 bg-transparent backdrop-blur-0 transition-all duration-300 group-hover:bg-neutral-400 group-hover:bg-opacity-40 group-hover:backdrop-blur-sm dark:border-neutral-600 dark:group-hover:bg-neutral-600 dark:group-hover:bg-opacity-20">
        <svg fill="white" viewBox="0 0 496 512" height="1.6em">
          <path d={path}></path>
        </svg>
      </span>
      <span
        className="absolute -z-[1] h-full w-full rounded-lg transition-all duration-300 group-hover:origin-bottom group-hover:rotate-[35deg]"
        style={{ backgroundColor: bgColor }}
      ></span>
    </a>
  )
}
