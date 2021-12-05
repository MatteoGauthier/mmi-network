import Link from "next/link"

export default function FourOhFour() {
	return (
		<div className="h-screen w-screen flex items-center justify-center flex-col space-y-3">
			<h1 className="text-3xl font-bold">404 - Page Not Found</h1>
			<Link href="/">
				<a>Go back home</a>
			</Link>
		</div>
	)
}
