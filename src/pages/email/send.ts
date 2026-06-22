import { sendEmail } from "@/server/api/resend.server"
import type { APIRoute } from "astro"

export const POST = (async ({ request }) => {
	const { email, subject, message } = await request.json()

	// Validate input
	if (!email || !subject || !message) {
		return new Response(
			JSON.stringify({ error: "Email, subject, and message are required." }),
			{ status: 400 }
		)
	}

	try {
		await sendEmail(email, subject, message)

		return new Response(JSON.stringify({ success: true }), { status: 200 })
	} catch (error) {
		console.error("Error sending email:", error)
		return new Response(JSON.stringify({ error: "Failed to send email." }), {
			status: 500,
		})
	}
}) satisfies APIRoute
