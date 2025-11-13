import { useLoaderData } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import portrait1 from './assets/jpg/portrait-01.jpg'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import Document from './components/shared-layout/Document.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'
import { RiTwitterXFill, RiLinkedinBoxFill } from 'react-icons/ri'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()

	return (
		<Document nonce={nonce} honeyProps={data?.honeyProps}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">Your journey begins</h1>

						<div className="w-fit rounded-lg bg-slate-800 p-8">
							<img
								src={portrait1}
								alt="Portrait 1"
								className="mt-8 w-48 rounded-full shadow-lg md:w-64 lg:w-80"
							/>
							<div className="pt-6">
								<h3 className="font-semi-bold text-center text-white">
									Leonard Krasner
								</h3>
								<p className="pt-1 text-center text-slate-400">
									Senior Designer
								</p>

								<div className="flex justify-center gap-4 pt-6 text-slate-400">
									<RiTwitterXFill />
									<RiLinkedinBoxFill />
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</Document>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
