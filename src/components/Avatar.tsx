import { type JSX } from 'react/jsx-runtime'

function Avatar (): JSX.Element {
  return (
    <img
      className="w-36 h-36 rounded-full object-cover object-center ml-4"
      src="./public/mi-foto.jpg"
      alt="My avatar"
    />
  )
}

export default Avatar
