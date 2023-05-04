// import fs from 'fs'
import { getFrontMatter, getSingleContent } from '@/lib/mdx'
import generateRss from '@/lib/generate-rss'
import { ARTICLES_CONTENT_PATH } from '@config/constants'
import PostLayout from '@/layouts/PostLayout'

export async function getStaticPaths() {
  const posts = await getFrontMatter(ARTICLES_CONTENT_PATH, false)
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getFrontMatter(ARTICLES_CONTENT_PATH, false)
  const post = posts.filter((a) => a.slug == slug)
  const postUrl = post[0].publishedOn + '_' + slug
  const content = await getSingleContent(ARTICLES_CONTENT_PATH, postUrl)

  // const posts = await getFrontMatter(ARTICLES_CONTENT_PATH, true)
  // const rss = generateRss(posts)
  // fs.writeFileSync('./public/index.xml', rss)
  // const postsSorted = posts.sort((a, b) => dateSortDesc(a.date, b.date))
  // const postIndex = postsSorted.findIndex((post) => post.slug === postSlug)
  // const prev = postsSorted[postIndex + 1] || null
  // const next = postsSorted[postIndex - 1] || null

  if (!content) {
    console.warn(`No content found for slug ${postUrl}`)
  }

  return { props: { content } }
}

export default function Article({ content }) {
  const { mdxSource, frontMatter } = content

  // Detect the development environment.
  const env = process.env.NODE_ENV

  return (
    <>
      {frontMatter.draft !== true || (frontMatter.draft === true && env === 'development') ? (
        <PostLayout frontMatter={frontMatter}>{mdxSource}</PostLayout>
      ) : (
        <div className="my-48 text-center">
          <h1 className="text-xl font-bold">
            Under construction.{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </h1>
        </div>
      )}
    </>
  )
}
