import { type JSX } from 'react/jsx-runtime'

import { Name, Avatar, HeaderBar } from './components'

function App(): JSX.Element {
  return (
    <>
      <HeaderBar />
      <section className="absolute top-0 h-max min-h-screen w-full bg-gradient-to-br from-slate-100 to-teal-300 dark:from-slate-500 dark:to-teal-600">
        <Name name="Santiago Castro Muñoz" />
        <Avatar />
      </section>
    </>
  )
}

export default App
