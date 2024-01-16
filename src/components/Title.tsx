export default function Title(): JSX.Element {
  return (
    <a href="#home" className="flex items-center md:w-full">
      <img src="./logo.svg" alt="logo" className="h-10 rounded-full drop-shadow-md" />
      <p className="hidden bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent drop-shadow-md md:block">
        &nbsp;Santicm
      </p>
    </a>
  )
}
