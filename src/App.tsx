import { type JSX } from 'react/jsx-runtime'

import { Name, Avatar, HeaderBar } from './components'

function App(): JSX.Element {
  return (
    <div className="absolute top-0 h-max min-h-screen w-full">
      <video autoPlay={true} muted loop className="absolute -z-10 h-screen w-full object-cover">
        <source src="./waves.mp4" type="video/mp4" />
      </video>
      <HeaderBar />
      <Name name="Santiago Castro Muñoz" />
      <Avatar />
    </div>
  )
}

export default App
