import { Link } from 'react-router'
import { getArticleImgSrc } from '#app/utils/misc.tsx'
import portrait01 from '~/assets/jpg/portrait-01.jpg'

interface ArticleCardProps {
	articleId: any
	title: string
	category?: string
	objectKey?: string
}
export default function ArticleCard({
	articleId,
	title,
	category,
	objectKey,
}: ArticleCardProps) {
	const imgSrc = objectKey ? getArticleImgSrc(objectKey) : portrait01
	return (
		<Link key={articleId} to={`/article/${articleId}`}>
			<div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
				<div className="h-48 w-full overflow-hidden bg-gray-200">
					<img
						src={imgSrc}
						alt={title}
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="p-6">
					<h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
					<p className="text-sm text-gray-600">{category || 'General News'}</p>
				</div>
			</div>
		</Link>
	)
}
