import { type JSX } from 'react/jsx-runtime'

import { Name, Avatar, Menu } from './components'

function App(): JSX.Element {
  return (
    <>
      <Menu />
      <main className="absolute left-0 top-0 w-full">
        <section className="min-h-screen w-full bg-gradient-to-br from-slate-100 to-teal-300 pl-8 pt-40 dark:from-slate-500 dark:to-teal-600">
          <Name name="Santiago Castro Muñoz" />
          <Avatar />
        </section>
        <section>
          <h1 className="text-9xl font-extrabold">About</h1>
          <p className="text-5xl">
            Lorem ipsum a a a a a a a a a a a aaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa a
          </p>
        </section>
      </main>
    </>
  )
}

export default App
