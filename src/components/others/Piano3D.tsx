import { lazy, Suspense } from "react"
import Loader from "../loaders/Loader"

const Spline = lazy(() => import("@splinetool/react-spline"))

export default function Piano3D() {
	return (
		<Suspense fallback={<Loader />}>
			<div className="h-[470px] w-full max-w-[300px]">
				<Spline scene="https://draft.spline.design/1nt5EcSeZB3b4RHY/scene.splinecode" />
			</div>
		</Suspense>
	)
}
