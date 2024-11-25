import { useEffect, useState } from "react"
import Vinyl from "../others/Vinyl"
import type { Song } from "@/models/song"
import { getRandomSong } from "@/services/musicService"

const defaultSong: Song = {
	title: "",
	author: "",
	thumbnail: "",
	videoId: "",
}

export default function Music() {
	const [song, setSong] = useState<Song>(defaultSong)

	useEffect(() => {
		getRandomSong()
			.then((data) => {
        setSong(data)
        console.log(data)
      })
			.catch(() => {
        setSong(defaultSong)
        console.log("Error")
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
		</div>
	)
}
