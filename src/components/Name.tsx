import { type JSX } from 'react/jsx-runtime'

interface NameProps {
  name: string
}

function Name({ name }: NameProps): JSX.Element {
  return (
    <div>
      <h1 className="text-5xl font-bold text-cyan-700 dark:text-cyan-200">
        Hello, I am <span className="inline-block cursor-default hover:animate-hand-wave">👋</span>
      </h1>
      <h2 className="w-2/4 text-7xl font-extrabold text-cyan-950 transition-transform hover:scale-105 dark:text-cyan-50">
        {name}
      </h2>
    </div>
  )
}

export default Name
