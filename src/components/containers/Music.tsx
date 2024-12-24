import { useEffect, useState } from "react"
import Vinyl from "../others/Vinyl"
import type { Song } from "@/models/song"
import { getRandomSong } from "@/services/musicService"
import PlayIcon from "../icons/PlayIcon"
import { cn } from "@/utils/tailwind"

const defaultSong: Song = {
	title: "",
	author: "",
	thumbnail: "",
	video_id: "",
}

export default function Music() {
	const [song, setSong] = useState<Song>(defaultSong)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getRandomSong()
			.then((data) => {
				setSong(data)
				setLoading(false)
			})
			.catch((e) => {
				setSong(defaultSong)
				console.error(e)
				console.error("Error while fetching song")
			})
	}, [])

	return (
		<div className="flex h-full items-center">
			<Vinyl src={song.thumbnail} alt={song.title} />
			<div className={cn("mx-4 flex flex-col justify-center w-full", loading && "gap-2")}>
				{loading ? (
					<>
						<div className="animate-skeleton h-5 w-full lg:w-5/6 max-w-sm rounded-lg bg-gray-500 dark:bg-gray-200" />
						<div className="animate-skeleton h-4 w-2/3 max-w-sm rounded-lg bg-gray-400 dark:bg-gray-400" />
					</>
				) : (
					<>
						<span className="line-clamp-1">{song.title}</span>
						<span className="line-clamp-1 text-gray-500 dark:text-gray-400">
							{song.author}
						</span>
					</>
				)}
			</div>
			<a
				href={`https://music.youtube.com/watch?${song.video_id ? `v=${song.video_id}&` : ""}list=PLBe_IcbkA8Dh5AckMuidKfT0SFiTmSc0Q`}
				target="_blank"
				rel="noreferrer"
				aria-label="Play song"
				className="ml-auto mr-2 rounded-lg border border-indigo-300/40 bg-indigo-400/10 p-2 text-indigo-400 outline outline-1 outline-indigo-400/40 transition-colors duration-150 hover:bg-indigo-400/20 dark:border-violet-100/10 dark:bg-violet-400/10 dark:text-violet-400 dark:outline-violet-400/50 hover:dark:bg-violet-400/20"
			>
				<PlayIcon className="h-5 w-5" />
			</a>
		</div>
	)
}
