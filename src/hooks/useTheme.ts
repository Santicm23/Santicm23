import { useState, useEffect } from "react"

function useTheme() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const theme = document.cookie
			.split("; ")
			.find((row) => row.startsWith("theme="))
			?.split("=")[1]
		return (
			theme === "dark"
		)
	})

	useEffect(() => {
		const handleThemeChange = () => {
			const theme = document.cookie
				.split("; ")
				.find((row) => row.startsWith("theme="))
				?.split("=")[1]
			if (theme === "dark") {
				setIsDarkMode(true)
			} else {
				setIsDarkMode(false)
			}
		}

		window.addEventListener("theme-change", handleThemeChange)
		window.addEventListener("cookie", handleThemeChange)

		return () => {
			window.removeEventListener("theme-change", handleThemeChange)
			window.removeEventListener("cookie", handleThemeChange)
		}
	}, [isDarkMode])

	function toggleTheme() {
		setIsDarkMode(!isDarkMode)
	}

	return { isDarkMode, toggleTheme }
}

export default useTheme
