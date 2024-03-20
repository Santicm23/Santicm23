import { useState } from "react"

import MenuItem from "./MenuItem"

const menu = [
	{ name: "Home", href: "#home", selected: true },
	{ name: "About", href: "#about", selected: false },
	{ name: "Projects", href: "#projects", selected: false },
	{ name: "Contact", href: "#contact", selected: false },
]

function Menu(): JSX.Element {
	const [, setMenu] = useState(menu)

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
			<ul className="hidden w-1/2 items-center gap-4 self-center px-4 sm:flex">
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
