import { type JSX } from 'react/jsx-runtime'

function Avatar(): JSX.Element {
  return (
    <img
      className="h-80 w-64 object-cover object-center"
      src="./coding-around-nature.png"
      alt="My avatar"
    />
  )
}

export default Avatar
