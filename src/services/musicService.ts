import { API_URL } from "@/config/environment/urls"
import type { Song } from "@/models/song"
import axios from "axios"

export async function getRandomSong(): Promise<Song> {
  const res = await axios.get(`${API_URL}/music/random`)
  return res.data
}
