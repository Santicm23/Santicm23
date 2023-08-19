import { type JSX } from 'react/jsx-runtime'

function Avatar(): JSX.Element {
  return (
    <img
      className="m-auto aspect-square h-80 rounded-full object-cover object-center"
      src="./my-photo.jpg"
      alt="My avatar"
    />
  )
}

export default Avatar
