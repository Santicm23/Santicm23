export interface Project {
	title: string
	description: string
	image: string
	links: {
		github?: string
		website?: string
		docs?: string
	}
	tech: ((_props: any) => any)[]
}
