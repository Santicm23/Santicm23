import { type JSX } from 'react/jsx-runtime'

function Avatar(): JSX.Element {
  return (
    <img
      className="aspect-square h-80 rounded-full object-cover object-center shadow-[0_6px_20px_0]"
      src="./my-photo.jpg"
      alt="My avatar"
    />
  )
}

export default Avatar
