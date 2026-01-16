import { type LoaderFunctionArgs, data, useLoaderData } from 'react-router'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'
import { invariant } from '@epic-web/invariant'
import { toTitleCase } from '#app/utils/stringUtils.ts'
export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	invariant(typeof category === 'string', 'No category provided')
	const categoryTitle = toTitleCase(category)

	const allArticles = await prisma.article.findMany({
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true, objectKey: true } },
		},
	})
	console.log({ category })

	return data({ allArticles })
}

export default function NewsCategoryPage() {
	const { allArticles } = useLoaderData<typeof loader>()

	return (
		<div className="container py-16">
			<h2 className="text-h2">Generic news category page</h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{allArticles.map((article) => (
					<ArticleCard
						key={article.id}
						articleId={article.id}
						category={article.category?.name}
						objectKey={article.images?.[0]?.objectKey}
						title={''}
					/>
				))}
			</div>
		</div>
	)
}
