import { z } from "zod"

const envSchema = z.object({
	SPOTIFY_CLIENT_ID: z.string(),
	SPOTIFY_CLIENT_SECRET: z.string(),
})

const { success, error, data } = envSchema.safeParse(import.meta.env)

if (!success) {
	throw new Error("Error reading environment variables:\n" + error.message)
}

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = data

export { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET }
