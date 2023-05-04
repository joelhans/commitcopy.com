import { getFrontMatter, getSingleContent } from '@/lib/mdx'
import { WORK_CONTENT_PATH } from '@config/constants'
import WorkLayout from '@/layouts/WorkLayout'

export async function getStaticPaths() {
  const work = await getFrontMatter(WORK_CONTENT_PATH)
  const paths = work.map((item) => {
    return {
      params: {
        slug: item.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const postSlug = slug
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
