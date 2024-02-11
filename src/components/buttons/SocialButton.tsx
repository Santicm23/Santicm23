interface Props {
  Icon: (props: { className?: string }) => JSX.Element
  href: string
  name: string
}

export default function SocialButton({ Icon, href, name }: Props): JSX.Element {
  return (
    <div className="group relative m-20 w-min">
      <a href={href} target="_blank" rel="noreferrer">
        <Icon className="w-8 duration-200 hover:scale-125 hover:stroke-indigo-400" />
      </a>
      <span className="absolute -bottom-14 left-1/2 z-20 origin-top -translate-x-1/2 scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold text-black shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        {name}
        <span></span>
      </span>
    </div>
  )
}
