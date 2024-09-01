interface Translate {
	en: string[]
	es: string[]
	fr: string[]
	pt: string[]
}

export function translate({ en, es, fr, pt }: Translate, pathname: string) {
	switch (pathname) {
		case "/" || "/en":
			return en
		case "/es":
			return es
		case "/fr":
			return fr
		case "/pt":
			return pt
		default:
			return en
	}
}
