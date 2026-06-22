import { z } from "zod"

const envSchema = z.object({
	SPOTIFY_CLIENT_ID: z.string(),
	SPOTIFY_CLIENT_SECRET: z.string(),
	RESEND_API_KEY: z.string(),
	RECEIPT_EMAILS: z
		.string()
		.transform((val) => val.split(","))
		.pipe(z.array(z.string())),
})

const { success, error, data } = envSchema.safeParse(import.meta.env)

if (!success) {
	throw new Error("Error reading environment variables:\n" + error.message)
}

const {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	RESEND_API_KEY,
	RECEIPT_EMAILS,
} = data

export {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	RESEND_API_KEY,
	RECEIPT_EMAILS,
}
