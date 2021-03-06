import { useState } from 'react'
import CustomLink from '@components/Link'
import Tag from '@components/Tag'
import siteMetdata from '@data/siteMetadata'
import PageTitle from '@components/PageTitle'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function ListLayout({ posts, title, summary }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // Detect the development environment.
  const env = process.env.NODE_ENV

  return (
    <>
      <div className="mt-24">
        <PageTitle>{title}</PageTitle>
        <div className="prose prose-md lg:prose-lg dark:prose-dark">
          <p className="text-xl lg:text-2xl text-steel">{summary}</p>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-16 mb-24">
          <ul>
            {!filteredBlogPosts.length && 'No articles found.'}
            {filteredBlogPosts.map((frontMatter) => {
              const { slug, draft, title, summary, tags } = frontMatter
              return (
                draft === false && (
                  <li key={slug} className="block mb-16">
                    <CustomLink href={`/articles/${slug}`}>
                      <h3 className="text-xl lg:text-2xl font-display font-bold mb-2 hover:text-sea transition-all">
                        {title}
                      </h3>
                    </CustomLink>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <p className="prose prose-md lg:prose-lg dark:prose-dark text-gray-500 dark:text-gray-400 mb-1">
                      {summary}
                    </p>
                    <CustomLink
                      href={`/articles/${slug}`}
                      className="text-sm font-bold hover:text-sea transition-all"
                    >
                      Read more &rarr;
                    </CustomLink>
                  </li>
                )
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
