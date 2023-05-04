import siteMetadata from '@data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@components/SEO'
import { getFrontMatter } from '@/lib/mdx'
import { ARTICLES_CONTENT_PATH } from '@config/constants'

export async function getStaticProps() {
  const posts = await getFrontMatter(ARTICLES_CONTENT_PATH)
  return { props: { posts } }
}

export default function Posts({ posts }) {
  return (
    <>
      <PageSeo
        title={`Writing for open source && cloud native`}
        description={`For product marketing and developer content leads who want to uplevel the way their organization uses writing to talk about their business, build their community, and inspire big commitments from developers and engineering leaders.`}
        url={`${siteMetadata.siteUrl}/articles`}
      />
      <ListLayout
        posts={posts}
        title="Writing for open source && cloud native"
        summary="For product marketing and developer content leads who want to uplevel the way their organization uses writing to talk about their business, build their community, and inspire essential commitments from developers and engineering leaders."
      />
    </>
  )
}
