import { data, useLoaderData, type MetaFunction } from 'react-router'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import { prisma } from '#app/utils/db.server.ts'
import heroImage from '~/assets/jpg/hero.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]
export async function loader() {
	const techArticles = await prisma.article.findMany({
		where: {
			category: {
				slug: 'technology',
			},
		},

		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	const entertainmentArticles = await prisma.article.findMany({
		where: {
			category: {
				slug: 'entertainment',
			},
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	const busisnessArticles = await prisma.article.findMany({
		where: {
			category: {
				slug: 'business',
			},
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	return data({ techArticles, entertainmentArticles, busisnessArticles })
}

export default function Index() {
	const { techArticles, entertainmentArticles, busisnessArticles } =
		useLoaderData<typeof loader>()
	const hasTechArticles = techArticles.length > 0
	const hasEntertainmentArticles = entertainmentArticles.length > 0
	const hasBusisnessArticles = busisnessArticles.length > 0

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
			<div className="container py-16">
				<h2 className="text-h2">Tech</h2>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{techArticles.length > 0 ? (
						techArticles.map((article) => (
							<ArticleCard
								key={article.id}
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
								objectKey={article.images?.[0]?.objectKey}
							/>
						))
					) : (
						<p>No articles available.</p>
					)}
				</div>

				<h2 className="text-h2">Entertainment</h2>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{entertainmentArticles.length > 0 ? (
						entertainmentArticles.map((article) => (
							<ArticleCard
								key={article.id}
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
								objectKey={article.images?.[0]?.objectKey}
							/>
						))
					) : (
						<p>No articles available.</p>
					)}
				</div>

				<h2 className="text-h2">Bussiness</h2>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{busisnessArticles.length > 0 ? (
						busisnessArticles.map((article) => (
							<ArticleCard
								key={article.id}
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
								objectKey={article.images?.[0]?.objectKey}
							/>
						))
					) : (
						<p>No articles available.</p>
					)}
				</div>
			</div>
		</main>
	)
}
