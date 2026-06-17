import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
} from "@/config/environment/secrets"
import axios from "axios"

let accessToken: string | null = null
let tokenExpiry: number | null = null

const PLAYLIST_ID = "2S7BRFmq5EbrwfPsBg7TyV"

export async function getSpotifyAccessToken(): Promise<string> {
	if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
		return accessToken
	}

	const { data } = await axios.post(
		"https://accounts.spotify.com/api/token",
		new URLSearchParams({
			grant_type: "client_credentials",
		}),
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization":
					"Basic " + btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`),
			},
		}
	)
	accessToken = data.access_token
	tokenExpiry = Date.now() + data.expires_in * 1000 - 60

	return data.access_token
}

const spotifyApi = (token: string) =>
	axios.create({
		baseURL: "https://api.spotify.com/v1",
		headers: { Authorization: `Bearer ${token}` },
	})

export async function getTotalTracksInPlaylist(): Promise<number> {
	const token = await getSpotifyAccessToken()

	const { data } = await spotifyApi(token).get(
		`/playlists/${PLAYLIST_ID}/items`,
		{
			params: { limit: 1, fields: "total" },
		}
	)

	return data.total
}

export async function getRandomSongFromPlaylist(): Promise<SpotifyTrack> {
	const total = await getTotalTracksInPlaylist()

	const token = await getSpotifyAccessToken()

	const randomOffset = Math.floor(Math.random() * total)

	const trackResponse = await spotifyApi(token).get(
		`/playlists/${PLAYLIST_ID}/items`,
		{
			params: {
				limit: 1,
				offset: randomOffset,
				fields: "items.item(id,name,album.images,artists.name)",
			},
		}
	)

	return trackResponse.data.items[0].item
}

interface SpotifyTrack {
	id: string
	name: string
	album: {
		images: { url: string }[]
	}
	artists: { name: string }[]
}
