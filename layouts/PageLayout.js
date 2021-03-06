import { PageSeo } from '@components/SEO'
import PageTitle from '@components/PageTitle'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer } from '@components/MDXComponents'

export default function PostLayout({ mdxSource, frontMatter }) {
  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/${frontMatter.slug}`}
      />
      <header className="mt-24">
        <PageTitle>{frontMatter.title}</PageTitle>
        <div className="prose prose-md lg:prose-lg dark:prose-dark">
          <p className="text-xl md:text-2xl lg:text-3xl text-steel">
            {frontMatter.summary} {frontMatter.summary_cont}
          </p>
        </div>
      </header>
      <div className="prose prose-md lg:prose-lg dark:prose-dark mt-8 md:mt-16 mb-24">
        <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
      </div>
    </>
  )
}
