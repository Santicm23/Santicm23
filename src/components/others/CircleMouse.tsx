import { useEffect, useRef } from "react"

const speed = 0.17
const mouse = { x: 0, y: 0 }
const prevMouse = { x: 0, y: 0 }
const circle = { x: 0, y: 0 }
let scale = 0
let angle = 0

export default function CircleMouse() {
	const circleRef = useRef<HTMLDivElement>(null)

	const tick = () => {
		if (circleRef.current === null) return

		circle.x += (mouse.x - circle.x) * speed
		circle.y += (mouse.y - circle.y) * speed

		const translateTransform = `translate(${circle.x}px, ${circle.y}px)`

		const deltaMouseX = mouse.x - prevMouse.x
		const deltaMouseY = mouse.y - prevMouse.y

		prevMouse.x = mouse.x
		prevMouse.y = mouse.y

		const mouseVelocity = Math.min(
			Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
			150
		)

		const scaleValue = (mouseVelocity / 150) * 0.5

		scale += (scaleValue - scale) * speed

		const scaleTransform = `scale(${1 + scale}, ${1 - scale})`

		const newAngle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI

		if (mouseVelocity > 20) {
			angle = newAngle
		}

		const rotateTransform = `rotate(${angle}deg)`

		circleRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`

		window.requestAnimationFrame(tick)
	}
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			mouse.x = e.clientX
			mouse.y = e.clientY
		})

		tick()
	}, [])

	return (
		<div
			ref={circleRef}
			className="pointer-events-none fixed -left-[10px] -top-[10px] z-50 hidden h-5 w-5 rounded-full border border-black dark:border-white md:block bg-slate-200/20 dark:bg-gray-950/20 backdrop-blur-[1px]"
		></div>
	)
}
