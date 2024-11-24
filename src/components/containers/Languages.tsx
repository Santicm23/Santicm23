import { cn } from "@/utils/tailwind"

export default function Languages() {
	const html = document.querySelector("html")!

	return (
		<div className="relative mt-6 hidden flex-col overflow-hidden rounded-lg border border-white shadow-xl outline-1 outline-gray-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-slate-200/30 before:backdrop-blur-md group-hover:flex dark:border-white/10 dark:shadow-none dark:outline-gray-700/20 before:dark:bg-gray-950/30">
			<a
				href="/"
				className={cn(
					"flex gap-2 px-4 py-1 hover:bg-white/50 dark:hover:bg-gray-500/20",
					html.lang === "en" ? "bg-white/50 dark:bg-gray-500/20" : ""
				)}
			>
				<span>🇬🇧</span>
				<span className="w-full text-center text-slate-600 dark:text-slate-200">English</span>
			</a>
			<a
				href="/es"
				className={cn(
					"flex gap-2 px-4 py-1 hover:bg-white/50 dark:hover:bg-gray-500/20",
					html.lang === "es" ? "bg-white/50 dark:bg-gray-500/20" : ""
				)}
			>
				<span>🇪🇸</span>
				<span className="w-full text-center text-slate-600 dark:text-slate-200">Español</span>
			</a>
			<a
				href="/fr"
				className={cn(
					"flex gap-2 px-4 py-1 hover:bg-white/50 dark:hover:bg-gray-500/20",
					html.lang === "fr" ? "bg-white/50 dark:bg-gray-500/20" : ""
				)}
			>
				<span>🇫🇷</span>
				<span className="w-full text-center text-slate-600 dark:text-slate-200">Français</span>
			</a>
			<a
				href="/pt"
				className={cn(
					"flex gap-2 px-4 py-1 hover:bg-white/50 dark:hover:bg-gray-500/20",
					html.lang === "pt" ? "bg-white/50 dark:bg-gray-500/20" : ""
				)}
			>
				<span>🇵🇹</span>
				<span className="w-full text-center text-slate-600 dark:text-slate-200">Português</span>
			</a>
		</div>
	)
}
