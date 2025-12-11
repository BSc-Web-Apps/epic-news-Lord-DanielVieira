import { type LoaderFunctionArgs, data, useLoaderData } from 'react-router'

export async function loader({ params }: LoaderFunctionArgs) {
	const { articleId } = params

	console.log({ articleId })

	return data({ articleId })
}

export default function SingleArticlePage() {
	const { articleId } = useLoaderData<typeof loader>()
	return (
		<div className="container py-16">
			<h2 className="text-h2">Article Page for Article ID: {articleId}</h2>

			<p>Article ID: {articleId}</p>
		</div>
	)
}
