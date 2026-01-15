import { TeamMemberCard } from '#app/root.tsx'
import headshot from '~/assets/jpg/portrait-01.jpg'
import headshot2 from '~/assets/jpg/portrait-02.jpg'
import headshot3 from '~/assets/jpg/portrait-03.jpg'

export default function Aboutus() {
	return (
		<div className="container mx-auto my-20 flex flex-col items-center gap-8 px-4">
			<h1 className="text-h1">About Us</h1>
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
		</div>
	)
}
