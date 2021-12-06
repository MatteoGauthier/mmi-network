import Avatar from "../components/avatar"
import Date from "../components/date"
import CoverImage from "../components/cover-image"
import PostTitle from "../components/post-title"

export default function PostHeader({ title, coverImage, date, author }) {
	return (
		<>
			{/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
			<div className="mb-8 md:mb-16 flex sm:mx-0">
				{/* <CoverImage title={title} url={coverImage.url} /> */}
				<PostTitle>{title}</PostTitle>
			</div>
			<div className="max-w-screen-xl">
				<div className="mb-6 text-lg">
					<Date dateString={date} />
				</div>
			</div>
		</>
	)
}
