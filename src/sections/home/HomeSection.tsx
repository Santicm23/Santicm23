import { Card, Name } from '../../components'

function HomeSecion(): JSX.Element {
  return (
    <section
      id="home"
      className="grid min-h-screen w-full grid-cols-1 bg-gradient-to-br from-slate-100 to-teal-300 dark:from-slate-500 dark:to-teal-950 md:grid-cols-2"
    >
      <Name name="Santiago Castro Muñoz" />
      <Card />
    </section>
  )
}

export default HomeSecion
