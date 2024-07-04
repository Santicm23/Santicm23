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

const cloudProps: Omit<ICloud, "children"> = {
	containerProps: {
		style: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "12rem",
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
		radiusX: 0.8,
		radiusY: 0.8,
		radiusZ: 0.8,
	},
}

export function renderCustomIcon(icon: SimpleIcon, theme: string) {
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

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
	const [data, setData] = useState<IconData | null>(null)

	const { isDarkMode } = useTheme()
	const theme = isDarkMode ? "dark" : "light"

	useEffect(() => {
		fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
	}, [iconSlugs])

	const renderedIcons = useMemo(() => {
		if (!data) return null

		return Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon, theme || "light"))
	}, [data, theme])

	return (
		// @ts-ignore
		<Cloud {...cloudProps}>
			<>{renderedIcons}</>
		</Cloud>
	)
}
