import Link from '@components/Link'

const WorkLink = ({ url, title }) => {
  return (
    <>
      <button className="text-sea text-lg font-medium px-4 py-3 bg-white border shadow-sm rounded transition-all hover:bg-sea hover:text-white">
        <Link to={url}>
          <p>{title}</p>
        </Link>
      </button>
    </>
  )
}

export default WorkLink
