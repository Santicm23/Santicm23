import { type JSX } from 'react/jsx-runtime'

interface NameProps {
  name: string
}

function Name({ name }: NameProps): JSX.Element {
  return (
    <div className="ml-10 mt-40">
      <h1 className="mt-10 text-5xl font-bold">Hello, I am 👋</h1>
      <h2 className="w-2/4 font-serif text-7xl font-bold text-indigo-500 hover:drop-shadow-2xl">
        {name}
      </h2>
    </div>
  )
}

export default Name
