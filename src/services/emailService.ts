import axios from "axios"

export async function sendEmail(
	email: string,
	subject: string,
	message: string
): Promise<void> {
	await axios.post("/email/send", {
		email,
		subject,
		message,
	})
}
