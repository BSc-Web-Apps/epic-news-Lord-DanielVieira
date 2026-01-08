import { getArticleImgSrc } from '#app/utils/misc.tsx'
import { Link } from 'react-router'
import portrait01 from '~/assets/jpg/portrait-01.jpg'

interface ArticleCardProps {
	article: any
	index: number
	objectKey?: string
}
export default function ArticleCard({
	article,
	index,
	objectKey,
}: ArticleCardProps) {
	const imgSrc = objectKey ? getArticleImgSrc(objectKey) : portrait01
	return (
		<Link key={article.id} to={`/article/${article.id}`}>
			<div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
				<div className="h-48 w-full overflow-hidden bg-gray-200">
					<img
						src={imgSrc}
						alt={index === 0 ? 'Portrait 01' : article.title}
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="p-6">
					<h3 className="mb-2 text-lg font-semibold text-gray-900">
						{article.title}
					</h3>
					<p className="text-sm text-gray-600">
						{article.category?.name || 'General News'}
					</p>
				</div>
			</div>
		</Link>
	)
}
