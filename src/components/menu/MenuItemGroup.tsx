import { useEffect, useState } from "react"

import MenuItem from "@/components/menu/MenuItem"
import { useTranslations } from "@/utils/i18n"

const menu = [
	{ name: "Home", href: "#home", selected: true },
	{ name: "About", href: "#about", selected: false },
	{ name: "Projects", href: "#projects", selected: false },
	{ name: "More", href: "#more", selected: false },
]

interface MenuProps {
	lang: "en" | "es" | "fr" | "pt"
}

function Menu({lang}: MenuProps) {
	const t = useTranslations(lang)

	menu[0]!.name = t("nav.home")
	menu[1]!.name = t("nav.about")
	menu[2]!.name = t("nav.projects")
	menu[3]!.name = t("nav.more")

	const [, setMenu] = useState(menu)
	let previousIndex = 0

	useEffect(() => {
		const onScroll = () => {
			const sections = menu.map(item => document.querySelector(item.href))
			const currentSection = sections.find((section) => {
				const rect = section?.getBoundingClientRect()
				return rect && rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
			})
			const sectionIndex = sections.indexOf(currentSection as Element)
	
			if (previousIndex === sectionIndex || sectionIndex === -1) return
	
			menu.forEach((item, index) => {
				item.selected = index === sectionIndex
			})
			previousIndex = sectionIndex
			setMenu({ ...menu })
		}
	
		window.removeEventListener("scroll", onScroll)
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const onSelect = (name: string): void => {
		menu.forEach((item) => {
			if (item.name === name) {
				item.selected = true
			} else {
				item.selected = false
			}
		})
		setMenu({ ...menu })
	}

	return (
		<>
			<ul className="hidden items-center gap-4 self-center lg:flex">
				{menu.map((data) => (
					<li key={data.name} className="group relative flex flex-col items-center">
						<MenuItem {...data} onSelect={onSelect} />
					</li>
				))}
			</ul>
		</>
	)
}

export default Menu
