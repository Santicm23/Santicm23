import { type JSX } from 'react/jsx-runtime'

import { Name, Card, Menu } from './components'

function App(): JSX.Element {
  return (
    <>
      <Menu />
      <main className="absolute left-0 top-0 w-full scroll-smooth">
        <section
          id="home"
          className="grid min-h-screen w-full grid-cols-1 bg-gradient-to-br from-slate-100 to-teal-300 dark:from-slate-500 dark:to-teal-950 md:grid-cols-2"
        >
          <Name name="Santiago Castro Muñoz" />
          <Card />
        </section>
        <section id="about">
          <h1 className="text-9xl font-extrabold">About</h1>
          <p className="text-5xl">
            Deserunt duis consectetur Lorem duis minim ad exercitation ad qui dolore non. Nulla id
            pariatur cupidatat nulla nisi laboris occaecat pariatur. Anim Lorem cupidatat
            adipisicing irure commodo velit pariatur eiusmod voluptate in ea et. Culpa duis ullamco
            eiusmod nulla aliquip. Sit dolor id culpa duis non sint enim cillum pariatur excepteur.
            Minim aliquip occaecat in cillum sunt est do mollit irure fugiat nostrud. Pariatur
            exercitation voluptate sunt nulla do id ipsum tempor minim pariatur veniam id eu sint.
          </p>
        </section>
      </main>
    </>
  )
}

export default App
