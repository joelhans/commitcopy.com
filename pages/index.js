import { PageSeo } from '@components/SEO'
import CustomLink from '@components/Link'
import siteMetadata from '@data/siteMetadata'
import Tag from '@components/Tag'
import { getFrontMatter } from '@/lib/mdx'
import { ARTICLES_CONTENT_PATH } from '@config/constants'

export async function getStaticProps() {
  const posts = await getFrontMatter(ARTICLES_CONTENT_PATH, true)
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="bg-green-100 w-full"></div>

      <header id="hero" className="mx-auto pt-32 pb-64">
        <h1 className="text-purple text-6xl leading-tight font-black mb-8 dark:text-gray-100">
          Turn{' '}
          <code className="text-5xl text-orange font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            git clone
          </code>{' '}
          into spirited clients, champions, and communities.
        </h1>
        <p className="max-w-screen text-gray-900 dark:text-gray-200 text-xl font-medium leading-relaxed mx-auto">
          The open-source copywriter for companies &amp; startups building future-enriching products
          with transparency.
        </p>
      </header>
      <div className="mb-24">
        <h2 className="text-lg text-sea font-bold uppercase mb-8">Recent articles</h2>
        <ul className="grid grid-cols-3 gap-8">
          {posts.slice(0, 3).map((frontMatter) => {
            const { slug, draft, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="block mb-16">
                <CustomLink href={`/articles/${slug}`}>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 hover:text-sea transition-all">
                    {title}
                  </h3>
                </CustomLink>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <p className="prose prose-md dark:prose-dark text-gray-500 dark:text-gray-400 mb-1">
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
          })}
        </ul>
      </div>
    </>
  )
}
