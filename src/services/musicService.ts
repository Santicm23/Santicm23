import type { Song } from "@/models/song"
import axios from "axios"

export async function getRandomSong(): Promise<Song> {
	return await axios.get("/random/song").then((res) => res.data)
}
