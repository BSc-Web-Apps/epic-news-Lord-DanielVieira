import { type MetaFunction } from 'react-router'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import { TeamMemberCard } from '#app/root.tsx'
import heroImage from '~/assets/jpg/hero.jpg'
import headshot from '~/assets/jpg/portrait-01.jpg'
import headshot2 from '~/assets/jpg/portrait-02.jpg'
import headshot3 from '~/assets/jpg/portrait-03.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-mega">Your journey begins</h1>
			<div className="w-full bg-white py-16">
				<div className="w-full py-16">
					<HeroCallToAction image={heroImage}>
						<div className="flex flex-col gap-8 px-8">
							<h2 className="text-h2 text-black">Climate change </h2>

							<p className="text-lg">
								Keep up to date with the latest tech news.
							</p>
						</div>
					</HeroCallToAction>
				</div>
			</div>
			<h1>The Latest</h1>
			<div className="m-12 flex flex-col gap-12 lg:flex-row">
				<TeamMemberCard
					name="Leonard Krasner"
					role="Senior Designer"
					imageSrc={headshot}
				/>

				<TeamMemberCard
					name="JOHN SNOW"
					role="LEVEL Designer"
					imageSrc={headshot2}
				/>

				<TeamMemberCard
					name="JOHN PORK"
					role="LEVEL MAKER"
					imageSrc={headshot3}
				/>
			</div>
		</main>
	)
}
