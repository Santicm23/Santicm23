import { lazy, Suspense } from 'react';
import Loader from '../loaders/Loader';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Piano3D() {
	return (
		<Suspense fallback={<Loader />}>
			<div className="h-[470px] w-full">
				<Spline scene="https://prod.spline.design/nNoIkSdzguX8mdUC/scene.splinecode" />
			</div>
		</Suspense>
	)
}
