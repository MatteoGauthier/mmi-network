import Layout from "@/components/layout"
import { getAllPostsForHome } from "@/lib/api"
import { CMS_NAME } from "@/lib/constants"
import TitleImage from "../assets/svgx/TitleImage"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import NetworkImageSrc from "../assets/images/clarisse-croset--tikpxRBcsA-unsplash.jpg"
import { getAllPosts } from "@/lib/data"

export default function Index({ allPosts, preview }) {
	const heroPost = allPosts[0]
	const morePosts = allPosts.slice(1)
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Le réseau pour les nuls</title>
				</Head>
				<div>
					<div className="grid md:overflow-hidden md:h-screen md:max-h-screen md:grid-cols-2 grid-cols-1 gap-x-12 xl:p-6 p-4">
						<div className="flex flex-col h-screen max-h-screen">
							<h1>
								<span className="visually-hidden">le reseau pour les nuls</span>
								<TitleImage className="w-full" />
							</h1>
							<hr className="border-t border-2 border-black mt-3" />
							<p className="text-xl mt-6 mb-4">
								Cet outil est destiné à ceux qui découvrent le réseau. A travers plusieurs articles, nous définissons
								les règles élémentaires de ce domaine. Bien entendu, cette plateforme est destinée à évoluer avec le
								temps.
							</p>
							{/* <div className="bg-red-900 w-full h-full"></div> */}
							<div className="relative flex-auto mb-10 overflow-hidden rounded-md">
								<Image layout="fill" objectFit="cover" quality={90} src={NetworkImageSrc} />
							</div>
						</div>
						<div className="grid  grid-cols-2 gap-x-7 auto-rows-min gap-y-4">
							{allPosts.map((post) => (
								<Link key={post.slug} href={`/posts/${post.slug}`}>
									<a className="shadow-lg group cursor-pointer border overflow-hidden border-gray-100 rounded-lg bg-white h-44">
										<div className="flex relative flex-col justify-between h-full pt-4 ">
											<div>
												<h2 className="text-2xl mb-1 px-3 font-bold font-satoshi leading-tight tracking-tight">
													{post.title}
												</h2>
												<p className="text-sm px-3 text-gray-700 line-clamp-3">{post.excerpt}</p>
											</div>
											<button className="bg-black bottom-0 inset-x-0 absolute group-hover:translate-y-0 transform-gpu translate-y-7 transition-transform duration-300 ease-in-out self-end px-3 h-10 flex items-center rounded-sm w-full text-white">
												Découvrir
											</button>
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	const allPosts = getAllPosts(["slug", "title", "excerpt", "date", "tags"])

	return {
		props: { allPosts },
	}
}
