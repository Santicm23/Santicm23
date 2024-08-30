import { atom, type PreinitializedWritableAtom } from "nanostores"

export type Languages = "en" | "es" | "fr" | "pt"

export const languageStore: PreinitializedWritableAtom<Languages> = atom("en")

export function setLanguage(lang: Languages) {
	languageStore.set(lang)
	localStorage.setItem("language", lang)
	document.documentElement.lang = lang
}

export function initLanguage() {
	const savedLanguage = localStorage.getItem("language") || "en"
	if (savedLanguage !== "en" && savedLanguage !== "es" && savedLanguage !== "fr") {
		localStorage.setItem("language", "en")
		return languageStore.set("en")
	}
	languageStore.set(savedLanguage)
}
