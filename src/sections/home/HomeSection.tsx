function HomeSecion(): JSX.Element {
  return (
    <section id="home" className="relative z-10 h-screen w-full">
      <h2 className="tracking-in-expand relative left-1/2 top-1/4 w-1/2 -translate-x-1/2 text-center text-3xl font-medium text-gray-900 [text-wrap:balance] dark:text-gray-50 sm:text-6xl">
        Hi! my name is{' '}
        <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Santiago
        </span>
      </h2>
    </section>
  )
}

export default HomeSecion
