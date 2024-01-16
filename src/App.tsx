import { Menu } from './components'
import { AboutSection, ContactSection, HomeSecion, ProjectsSection } from './sections'

function App(): JSX.Element {
  return (
    <>
      <Menu />
      <main className="relative min-h-screen w-full bg-slate-50 dark:bg-gray-950">
        <div className="fixed bottom-0 left-[-20%] right-0 top-[10%] z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#c4b5fd,rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_farthest-side,#2e1065,rgba(255,255,255,0))]"></div>
        <div className="fixed bottom-0 right-[-20%] top-[10%] z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#c4b5fd,rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_farthest-side,#2e1065,rgba(255,255,255,0))]"></div>

        <HomeSecion />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
