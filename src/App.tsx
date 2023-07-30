import { type JSX } from 'react/jsx-runtime'

import Avatar from './components/Avatar'

function App (): JSX.Element {
  return (
    <>
      <h1 className="font-bold text-center">
        Este es mi portafolio <span>Santicm</span> :)
      </h1>
      <Avatar />
    </>
  )
}

export default App
