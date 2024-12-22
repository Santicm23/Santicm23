import { useEffect, useMemo, useState } from "react"
import {
	Cloud,
	fetchSimpleIcons,
	type ICloud,
	renderSimpleIcon,
	type SimpleIcon,
} from "react-icon-cloud"

import useTheme from "@/hooks/useTheme"
import { isDarkColor, isLightColor } from "@/utils/colors"

// Names from simple icons and their colors
const slugsColors = {
	typescript: "#3178C6",
	java: "#F44336",
	python: "#0277BD",
	cplusplus: "#0086D4",
	rust: "#000000",
	dart: "#1565C0",
	kotlin: "#806EE3",
	react: "#80DEEA",
	angular: "#9717e7",
	astro: "#C822FF",
	flutter: "#40C4FF",
	nextdotjs: "#212121",
	tailwindcss: "#00ACC1",
	express: "#000000",
	nestjs: "#F50057",
	fastapi: "#009688",
	springboot: "#6DB33F",
	rabbitmq: "#FF6600",
	nginx: "#43A047",
	prisma: "#000000",
	selenium: "#21A366",
	docker: "#2395EC",
	github: "#000000",
	tensorflow: "#FF6F00",
	scikitlearn: "#F7931E",
	solidity: "#666666",
	solana: "#C822FF",
	apachekafka: "#231F20",
	amazonwebservices: "#232F3E",
	looker: "#2196F3",
	shadcnui: "#000000",
	graphql: "#E10098",
}

const cloudProps: Omit<ICloud, "children"> = {
	containerProps: {
		style: {
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
	},
	options: {
		reverse: true,
		depth: 1,
		wheelZoom: false,
		imageScale: 2,
		activeCursor: "default",
		tooltip: "native",
		initial: [0.1, -0.1],
		clickToFront: 500,
		tooltipDelay: 0,
		outlineColour: "#0000",
		maxSpeed: 0.03,
		minSpeed: 0.01,
		radiusX: 0.75,
		radiusY: 0.75,
		radiusZ: 0.75,
	},
}

export function renderCustomIcon(icon: SimpleIcon, theme: string) {
	icon.hex = slugsColors[icon.slug as keyof typeof slugsColors]
	const simpleIcon: any = {
		icon,
		minContrastRatio: 0,
		size: 42,
		aProps: {
			href: undefined,
			target: undefined,
			rel: undefined,
			onClick: (e: any) => e.preventDefault(),
		},
	}

	if (theme === "light") {
		if (isLightColor(icon.hex)) {
			simpleIcon.fallbackHex = "#000"
			simpleIcon.bgHex = "#000"
			simpleIcon.minContrastRatio = 100
		}
	} else {
		if (isDarkColor(icon.hex)) {
			simpleIcon.fallbackHex = "#fff"
			simpleIcon.bgHex = "#fff"
			simpleIcon.minContrastRatio = 100
		}
	}

	return renderSimpleIcon(simpleIcon)
}

export type DynamicCloudProps = {
	iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export default function IconCloud() {
	const [data, setData] = useState<IconData | null>(null)

	const { isDarkMode } = useTheme()
	const theme = isDarkMode ? "dark" : "light"

	useEffect(() => {
		fetchSimpleIcons({ slugs: Object.keys(slugsColors) }).then(setData)
	}, [])

	const renderedIcons = useMemo(() => {
		if (!data) return null

		return Object.values(data.simpleIcons).map((icon) =>
			renderCustomIcon(icon, theme || "light")
		)
	}, [data, theme])

	return (
		// @ts-ignore
		<Cloud {...cloudProps}>
			<>{renderedIcons}</>
		</Cloud>
	)
}
