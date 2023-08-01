import { type JSX } from 'react/jsx-runtime'

interface NameProps {
  name: string
}

function Name({ name }: NameProps): JSX.Element {
  return (
    <h2 className="ml-10 w-2/4 font-serif text-7xl font-bold text-indigo-500 hover:drop-shadow-2xl">
      {name}
    </h2>
  )
}

export default Name
