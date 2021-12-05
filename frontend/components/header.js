import Link from "next/link"

export default function Header() {
	return (
		<h2 className="text-xl  font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
			<Link href="/">
				<a className="hover:underline">← Retour à l'index</a>
			</Link>
		</h2>
	)
}
