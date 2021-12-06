import fs from "fs"
import path, { join } from "path"
import matter from "gray-matter"

export function getPostSlugs() {
	return fs.readdirSync(POSTS_PATH)
}

export function getPostBySlug(slug, fields = []) {
	const realSlug = slug.replace(/\.md$/, "")
	const fullPath = join(POSTS_PATH, `${realSlug}.md`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const { data, content } = matter(fileContents)

	console.log(data)

	const items = {}

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === "slug") {
			items[field] = realSlug
		}
		if (field === "content") {
			items[field] = content
		}

		if (data[field]) {
			items[field] = data[field]
		}
	})

	return items
}

export function getAllPosts(fields = []) {
	const slugs = getPostSlugs()
	console.log(slugs)
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
	return posts
}
// lsof -t -i tcp:3000 | xargs kill -9
export const POSTS_PATH = path.join(process.cwd(), "_content/posts")
export const postsFilePaths = fs
	.readdirSync(POSTS_PATH)
	// Only include md(x) files
	.filter((path) => /\.md?$/.test(path))
