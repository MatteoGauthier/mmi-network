import Container from "@/components/container"
import Header from "@/components/header"
import Layout from "@/components/layout"
import PostBody from "@/components/post-body"
import PostHeader from "@/components/post-header"
import PostTitle from "@/components/post-title"
import SectionSeparator from "@/components/section-separator"
import { CMS_NAME } from "@/lib/constants"
import Head from "next/head"
import { useRouter } from "next/router"
import FourOhFour from "pages/404"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import { postsFilePaths, POSTS_PATH } from "@/lib/data"
import path from "path"
import fs from "fs"
export default function Post({ frontMatter, source, morePosts, preview }) {
	const router = useRouter()
	// if (!router.isFallback && !frontMatter?.slug) {
	// 	return <FourOhFour />
	// }

	return (
		<Layout>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article>
							<Head>
								<title>
									{frontMatter.title} 
								</title>
							</Head>
							<PostHeader
								title={frontMatter.title}
								coverImage={frontMatter.coverImage}
								date={frontMatter.date}
								// author={frontMatter.author}
							/>
							<PostBody content={source} />
						</article>
						<SectionSeparator />
						{/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
					</>
				)}
			</Container>
		</Layout>
	)
}

// export async function getStaticProps({ params, preview = null }) {
//   const data = await getPostAndMorePosts(params.slug, preview)
//   const content = await markdownToHtml(data?.posts[0]?.content || '')

//   return {
//     props: {
//       preview,
//       post: {
//         ...data?.posts[0],
//         content,
//       },
//       morePosts: data?.morePosts,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug()
//   return {
//     paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
//     fallback: true,
//   }
// }

export const getStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.md`)

	const source = fs.readFileSync(postFilePath)

	const { content, data } = matter(source)

	console.log(data)

	const mdxSource = await serialize(content, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		// scope: data,
	})

	console.log(data)

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	}
}

export const getStaticPaths = async () => {
	const paths = postsFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.md?$/, ""))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }))

	console.log(paths)

	return {
		paths,
    
		fallback: false,
	}
}
