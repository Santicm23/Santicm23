interface Translate<T = string | string[]> {
	en: T
	es: T
	fr: T
	pt: T
}

export function translate<T = string | string[]>(
	{ en, es, fr, pt }: Translate<T>,
	pathname: string
): T {
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
