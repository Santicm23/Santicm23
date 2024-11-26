export interface Project {
	title: string
	description: string
	image: string
	website?: string
	github?: { name: string; url: string }[]
	technologies?: string[]
}
