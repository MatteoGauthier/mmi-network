import { MDXRemote } from "next-mdx-remote"

export default function PostBody({ content }) {
	return (
		<div className=" mx-auto">
			<article className="prose max-w-none">
				<MDXRemote {...content} />
			</article>
		</div>
	)
}
