import { useEffect, useState } from "react"
import Vinyl from "../others/Vinyl"
import type { Song } from "@/models/song"
import { getRandomSong } from "@/services/musicService"
import PlayIcon from "../icons/PlayIcon"

const defaultSong: Song = {
	title: "",
	author: "",
	thumbnail: "",
	video_id: "",
}

export default function Music() {
	const [song, setSong] = useState<Song>(defaultSong)

	useEffect(() => {
		getRandomSong()
			.then((data) => {
				setSong(data)
			})
			.catch(() => {
				setSong(defaultSong)
				console.error("Error while fetching song")
			})
	}, [])

	return (
		<div className="flex h-full items-center">
			<Vinyl src={song.thumbnail} alt={song.title} />
			<div className="mx-4 flex flex-col">
				<span className="line-clamp-1">{song.title}</span>
				<span className="line-clamp-1 text-gray-500 dark:text-gray-400">
					{song.author}
				</span>
			</div>
			<a
				href={`https://music.youtube.com/watch?v=${song.video_id}&list=PLBe_IcbkA8Dh5AckMuidKfT0SFiTmSc0Q`}
				target="_blank"
				className="ml-auto transition-colors duration-150 mr-2 rounded-lg border border-white/40 bg-indigo-400/10 p-2 text-indigo-400 outline outline-1 outline-indigo-400/40 hover:bg-indigo-400/20 dark:border-white/10 dark:bg-violet-400/10 dark:text-violet-400 dark:outline-violet-400/50 hover:dark:bg-indigo-400/20"
			>
				<PlayIcon className="h-5 w-5" />
			</a>
		</div>
	)
}
