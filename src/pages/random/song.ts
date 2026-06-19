import { getRandomSongFromPlaylist } from "@/server/api/spotify.server"
import type { APIRoute } from "astro"

export const GET = (async () => {
	const song = await getRandomSongFromPlaylist()

	return new Response(
		JSON.stringify({
			title: song.name,
			thumbnail: song.album.images[2]?.url || "",
			id: song.id, // Spotify doesn't provide a video ID, so this will be empty
			artists: song.artists.map((artist) => artist.name),
		})
	)
}) satisfies APIRoute
