import { Resend } from "resend"
import { RECEIPT_EMAILS, RESEND_API_KEY } from "../security/secrets.server"

const resend = new Resend(RESEND_API_KEY)

export async function sendEmail(
	email: string,
	subject: string,
	message: string
): Promise<void> {
	await resend.emails.send({
		from: "santicm.dev <portfolio@santicm.dev>",
		to: RECEIPT_EMAILS,
		subject,
		html: `
			<h3>New message from ${email}</h3>
			<p>${message}</p>
		`,
	})
}
