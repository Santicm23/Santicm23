import { Menu } from './components'
import { AboutSection, ContactSection, HomeSecion, ProjectsSection } from './sections'

function App(): JSX.Element {
  return (
    <>
      <Menu />
      <main className="absolute left-0 top-0 w-full">
        <HomeSecion />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
