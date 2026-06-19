export function hexToRgb(hex: string): { r: number; g: number; b: number } {
	// Remove the leading hash if present
	hex = hex.replace(/^#/, "")

	// Parse the hex color string
	let bigint = parseInt(hex, 16)
	let r = (bigint >> 16) & 255
	let g = (bigint >> 8) & 255
	let b = bigint & 255

	return { r, g, b }
}

export function getLuminance(r: number, g: number, b: number): number {
	// Convert RGB values to the range [0, 1]
	let rs = r / 255
	let gs = g / 255
	let bs = b / 255

	// Apply the gamma correction
	rs = rs <= 0.03928 ? rs / 12.92 : Math.pow((rs + 0.055) / 1.055, 2.4)
	gs = gs <= 0.03928 ? gs / 12.92 : Math.pow((gs + 0.055) / 1.055, 2.4)
	bs = bs <= 0.03928 ? bs / 12.92 : Math.pow((bs + 0.055) / 1.055, 2.4)

	// Calculate the luminance
	return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

export function isLightColor(hex: string): boolean {
	const { r, g, b } = hexToRgb(hex)
	const luminance = getLuminance(r, g, b)
	return luminance > 0.8
}

export function isDarkColor(hex: string): boolean {
	const { r, g, b } = hexToRgb(hex)
	const luminance = getLuminance(r, g, b)
	return luminance < 0.05
}
