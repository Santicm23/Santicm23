import { z } from "zod"

const envSchema = z.union([
	z.object({
		PROD: z.literal(false),
		PUBLIC_PROD_URL: z.string().optional(),
		PUBLIC_DEV_URL: z.string(),
	}),
	z.object({
		PROD: z.literal(true),
		PUBLIC_PROD_URL: z.string(),
		PUBLIC_DEV_URL: z.string().optional(),
	}),
])

const { success, error, data } = envSchema.safeParse(import.meta.env)

if (!success) {
	throw new Error("Error reading environment variables:\n" + error.message)
}

const { PROD, PUBLIC_PROD_URL, PUBLIC_DEV_URL } = data

const API_URL = PROD ? PUBLIC_PROD_URL : PUBLIC_DEV_URL

export { API_URL }
