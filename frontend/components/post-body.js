
export default function PostBody({ content }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
