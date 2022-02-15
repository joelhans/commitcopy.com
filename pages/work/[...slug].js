import { getFrontMatter, getSingleContent } from '@/lib/mdx'
import { WORK_CONTENT_PATH } from '@config/constants'
import WorkLayout from '@/layouts/WorkLayout'
import { MDXLayoutRenderer } from '@components/MDXComponents'

export async function getStaticPaths() {
  const posts = await getFrontMatter(WORK_CONTENT_PATH)
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const postSlug = slug.join('/')
  const content = await getSingleContent(WORK_CONTENT_PATH, postSlug)

  return { props: { content } }
}

export default function Project({ content }) {
  const { mdxSource, frontMatter } = content

  return (
    <>
      <WorkLayout frontMatter={frontMatter}>{mdxSource}</WorkLayout>
    </>
  )
}
