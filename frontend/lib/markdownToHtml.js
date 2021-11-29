import { marked } from "marked"

export default async function markdownToHtml(markdown) {
	const html = marked.parse(markdown)
	return html
}
