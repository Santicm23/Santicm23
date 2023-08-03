import { type JSX } from 'react/jsx-runtime'

function Avatar(): JSX.Element {
  return (
    <img
      className="m-4 h-36 w-36 rounded-full object-cover object-center"
      src="./src/assets/my-photo.jpg"
      alt="My avatar"
    />
  )
}

export default Avatar
