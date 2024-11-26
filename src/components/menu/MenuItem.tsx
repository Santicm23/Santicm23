import { cn } from "@/utils/tailwind"

interface Props {
	name: string
	href: string
	selected: boolean
	onSelect: (name: string) => void
}

function MenuItem({ name, href, selected, onSelect }: Props): JSX.Element {
	return (
		<>
			<a
				href={href}
				className={cn(
					"text-nowrap text-sm text-slate-600 transition duration-300 dark:text-slate-200",
					selected ? " -translate-y-1" : " group-hover:-translate-y-1"
				)}
				onClick={() => {
					onSelect(name)
				}}
			>
				{name}
			</a>
			<div
				className={
					"absolute bottom-0 h-[2px] w-0 rounded-full bg-indigo-400 transition-all duration-300 dark:bg-violet-400" +
					(selected ? " w-full" : " group-hover:w-full")
				}
			></div>
		</>
	)
}

export default MenuItem
