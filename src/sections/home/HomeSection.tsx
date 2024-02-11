import { GitHubIcon, LinkedInIcon, SocialButton } from '../../components'

function HomeSecion(): JSX.Element {
  return (
    <section id="home" className="relative z-10 h-screen w-full">
      <h2 className="relative left-1/2 top-1/4 w-2/3 -translate-x-1/2 animate-tracking-in-expand text-center text-3xl font-medium text-gray-900 [text-wrap:balance] dark:text-gray-50 sm:text-6xl">
        Hi! my name is{' '}
        <span className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Santiago
        </span>
      </h2>

      <SocialButton Icon={GitHubIcon} href="https://github.com/Santicm23" name="GitHub" />
      <SocialButton
        Icon={LinkedInIcon}
        href="https://www.linkedin.com/in/santiago-castro-muñoz/"
        name="LinkedIn"
      />
    </section>
  )
}

export default HomeSecion
