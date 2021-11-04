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

      <header id="hero" className="text-center pt-32 pb-64">
        <h1 className="text-5xl leading-tight font-bold mb-12">
          Turn <code className="text-sea font-bold bg-gray-100 px-4 py-2 rounded">git clone</code>{' '}
          into clients, champions, and spirited communities
        </h1>
        <span className="block text-2xl font-mono font-bold mb-12">{`</>`}</span>
        <p className="w-3/5 text-gray-700 text-lg font-bold leading-relaxed tracking-widest uppercase mx-auto">
          Technical and creative copywriting for companies and startups building future-enriching
          products through open source.
        </p>
      </header>
      <div className="mb-24">
        <h2 className="text-lg text-sea font-display font-bold uppercase mb-8">Recent articles</h2>
        <ul>
          {posts.slice(0, 3).map((frontMatter) => {
            const { slug, draft, title, summary, tags } = frontMatter
            return (
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
          })}
        </ul>
      </div>
    </>
  )
}
