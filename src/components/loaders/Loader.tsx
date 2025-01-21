import "./Loader.css"

export default function Loader() {
  return (
    <div className="container">
      <div className="half before:bg-indigo-400 after:bg-indigo-400 dark:before:bg-violet-400 dark:after:bg-violet-400"></div>
      <div className="half before:bg-indigo-400 after:bg-indigo-400 dark:before:bg-violet-400 dark:after:bg-violet-400"></div>
    </div>
  )
}
