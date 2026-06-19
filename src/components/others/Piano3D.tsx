import { lazy, Suspense } from "react"
import Loader from "../loaders/Loader"

const Spline = lazy(() => import("@splinetool/react-spline"))

export default function Piano3D() {
	return (
		<Suspense fallback={<Loader />}>
			<div className="h-117.5 w-full max-w-75">
				<Spline scene="https://draft.spline.design/0kNSsVTwt1ETuZI8/scene.splinecode" />
			</div>
		</Suspense>
	)
}
