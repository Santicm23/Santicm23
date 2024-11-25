interface Props {
	alt: string
	src: string
}

export default function Vinyl({ alt, src }: Props) {
	return (
		<div className="relative w-min transition-transform hover:translate-x-2 group-hover/bento:translate-x-2">
			<div className="absolute bottom-0 left-0 right-0 top-0 z-20 m-auto h-8 w-8 overflow-hidden rounded-full border border-white/20 bg-transparent outline outline-1 outline-offset-4 outline-white/20 dark:border-white/10 dark:outline-white/10">
				<img
					alt={alt}
					loading="lazy"
					width="64"
					height="64"
					decoding="async"
					data-nimg="1"
					className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto h-[38px] w-auto animate-[spin_5s_linear_infinite] rounded-full object-cover text-transparent"
					src={src}
				/>
			</div>
			<div className="absolute bottom-0 left-0 right-0 top-0 z-20 m-auto h-1 w-1 rounded-full bg-white dark:bg-neutral-900"></div>
			<div className="h-14 w-14 rounded-full border border-white bg-black shadow-md outline outline-1 outline-offset-0 outline-zinc-200 ring-1 ring-white/10 dark:border-white/10 dark:outline-[#1a1a1a]"></div>
		</div>
	)
}
