import { type LoaderFunctionArgs, data } from 'react-router'
import { useLoaderData } from 'react-router'
import { prisma } from '~/utils/db.server.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	const allArticles = await prisma.article.findMany({
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
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
			{allArticles.map((article) => (
				<div key={article.id}>
					<h3>{article.title}</h3>

					<p>{article.category?.name || 'General News'}</p>
				</div>
			))}
		</div>
	)
}
