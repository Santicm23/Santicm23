import { type JSX } from 'react/jsx-runtime'

import { Name, Avatar, HeaderBar } from './components'

function App(): JSX.Element {
  return (
    <section className="absolute top-0 h-max min-h-screen w-full bg-gradient-to-br from-green-300 to-amber-600 dark:from-green-800 dark:to-amber-900">
      <HeaderBar />
      <Name name="Santiago Castro Muñoz" />
      <Avatar />
    </section>
  )
}

export default App
