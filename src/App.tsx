import { type JSX } from 'react/jsx-runtime'

import { Name, Card, Menu } from './components'

function App(): JSX.Element {
  return (
    <>
      <Menu />
      <main className="absolute left-0 top-0 w-full scroll-smooth">
        <section
          id="home"
          className="grid min-h-screen w-full grid-cols-2 bg-gradient-to-br from-slate-100 to-teal-300 dark:from-slate-500 dark:to-teal-950"
        >
          <Name name="Santiago Castro Muñoz" />
          <Card />
        </section>
        <section id="about">
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
