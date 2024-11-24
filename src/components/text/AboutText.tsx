interface AboutTextProps {
	lang: "en" | "es" | "fr" | "pt"
}

export default function AboutText({ lang }: AboutTextProps) {
	return (
		<>
			{lang === "en" && <AboutTextEn />}
			{lang === "es" && <AboutTextEs />}
			{lang === "fr" && <AboutTextFr />}
			{lang === "pt" && <AboutTextPt />}
		</>
	)
}

function AboutTextEn() {
	return (
		<p className="text-balance pt-2 text-sm text-gray-400 lg:text-base [&>span]:text-black [&>span]:dark:text-white">
			I am a <span>software engineer</span> with a passion for{" "}
			<span>web development</span>, <span>cloud</span>, <span>blockchain</span>,
			and <span>machine learning</span>. I excel at solving complex{" "}
			<span>logical puzzles</span>, love <span>learning</span>, and thrive on
			facing <span>new challenges</span>. I am highly <span>organized</span> and{" "}
			<span>dedicated</span> to finding <span>efficient solutions</span> to{" "}
			<span>concurrent problems</span>.
		</p>
	)
}

function AboutTextEs() {
	return (
		<p className="text-balance pt-2 text-sm text-gray-400 lg:text-base [&>span]:text-black [&>span]:dark:text-white">
			Soy un <span>ingeniero de software</span> con pasión por el{" "}
			<span>desarrollo web</span>, <span>la nube</span>, <span>blockchain</span>
			, y el <span>aprendizaje de máquina</span>. Me destaco resolviendo{" "}
			<span>acertijos complejos</span>, amo <span>aprender</span> y me{" "}
			<span>motiva</span> enfrentar <span>nuevos desafíos</span>. Soy altamente{" "}
			<span>organizado</span> y me <span>dedico</span> a encontrar{" "}
			<span>soluciones eficientes</span> a <span>problemas concurrentes</span>.
		</p>
	)
}

function AboutTextFr() {
	return (
		<p className="text-balance pt-2 text-sm text-gray-400 lg:text-base [&>span]:text-black [&>span]:dark:text-white">
			Je suis un <span>ingénieur logiciel</span> passionné par la{" "}
			<span>web</span>, <span>le cloud</span>, <span>blockchain</span>, et{" "}
			<span>l'apprentissage automatique</span>. J'excelle dans la résolution{" "}
			<span>d'énigmes complexes</span>, j'adore{" "}
			<span>apprendre</span>, et je cherche à affronter des{" "}
			<span>nouveaux défis</span>. Je suis très <span>organisé</span> et{" "}
			<span>dévoué</span> à trouver des <span>solutions efficaces</span> à{" "}
			<span>problèmes concurrents</span>.
		</p>
	)
}

function AboutTextPt() {
	return (
		<p className="text-balance pt-2 text-sm text-gray-400 lg:text-base [&>span]:text-black [&>span]:dark:text-white">
			Sou um <span>engenheiro de software</span> apaixonado por{" "}
			<span>a web</span>, <span>cloud</span>,{" "}
			<span>blockchain</span>, e <span>aprendizado de máquina</span>. Eu me destaco
			resolvendo <span>quebra-cabeças complexos</span>, amo{" "}
			<span>aprender</span>, e estou motivado para enfrentar <span>novos desafios</span>
			. Sou altamente <span>organizado</span> e me <span>dedico</span> a
			encontrar <span>soluções eficientes</span> para{" "}
			<span>problemas concorrentes</span>.
		</p>
	)
}
