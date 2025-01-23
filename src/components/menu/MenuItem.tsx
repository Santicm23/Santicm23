import { cn } from "@/utils/tailwind"

interface Props {
	name: string
	href: string
	selected: boolean
	onSelect: (name: string) => void
}

function MenuItem({ name, href, selected, onSelect }: Props) {
	return (
		<>
			<a
				href={href}
				className={cn(
					"text-nowrap text-sm text-slate-600 transition duration-300 focus:outline-indigo-400 dark:text-slate-200 dark:focus:outline-violet-400",
					{
						"-translate-y-1": selected,
						"group-hover:-translate-y-1": !selected,
					}
				)}
				onClick={() => {
					onSelect(name)
				}}
			>
				{name}
			</a>
			<div
				className={cn(
					"absolute bottom-0 h-[2px] w-0 rounded-full bg-indigo-400 transition-all duration-300 dark:bg-violet-400",
					selected ? "w-full" : "group-hover:w-full"
				)}
			></div>
		</>
	)
}

export default MenuItem
