import { useEffect, useState } from "react"

import MenuItem from "@/components/menu/MenuItem"

const menu = [
	{ name: "Home", href: "#home", selected: true },
	{ name: "About", href: "#about", selected: false },
	{ name: "Projects", href: "#projects", selected: false },
	{ name: "Contact", href: "#contact", selected: false },
]

interface MenuProps {
	names: string[]
}

function Menu({ names }: MenuProps) {
	menu[0]!.name = names[0]!
	menu[1]!.name = names[1]!
	menu[2]!.name = names[2]!
	menu[3]!.name = names[3]!

	const [, setMenu] = useState(menu)
	let previousIndex = 0

	useEffect(() => {
		const onScroll = () => {
			const sectionIndex = Math.floor(window.scrollY / window.innerHeight)

			if (previousIndex === sectionIndex) return

			menu.forEach((item, index) => {
				if (index === sectionIndex) {
					item.selected = true
					previousIndex = sectionIndex
				} else {
					item.selected = false
				}
			})
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
			<ul className="hidden items-center gap-4 self-center md:flex">
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
