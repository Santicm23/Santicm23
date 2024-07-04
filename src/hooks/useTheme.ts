import { useState, useEffect } from "react"

function useTheme() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return (
			localStorage.getItem("theme") === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
	})

	useEffect(() => {
		const classList = document.documentElement.classList
		if (isDarkMode) {
			classList.add("dark")
			localStorage.setItem("theme", "dark")
		} else {
			classList.remove("dark")
			localStorage.setItem("theme", "light")
		}

		const handleThemeChange = () => {
			const theme = localStorage.getItem("theme")
			if (theme === "dark") {
				setIsDarkMode(true)
			} else {
				setIsDarkMode(false)
			}
		}

		window.addEventListener("theme-change", handleThemeChange)
		window.addEventListener("storage", handleThemeChange)

		return () => {
			window.removeEventListener("theme-change", handleThemeChange)
			window.removeEventListener("storage", handleThemeChange)
		}
	}, [isDarkMode])

	function toggleTheme() {
		setIsDarkMode(!isDarkMode)
	}

	return { isDarkMode, toggleTheme }
}

export default useTheme
