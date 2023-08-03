import { type JSX } from 'react/jsx-runtime'

interface NameProps {
  name: string
}

function Name({ name }: NameProps): JSX.Element {
  return (
    <div className="z-10 ml-10 mt-40">
      <h1 className="text-5xl font-bold text-rose-400/70">Hello, I am 👋</h1>
      <h2 className="w-2/4 text-7xl font-extrabold text-rose-500/70 transition-all hover:scale-105">
        {name}
      </h2>
    </div>
  )
}

export default Name
