import CustomLink from '@components/Link'
import PageTitle from '@components/PageTitle'
import { BlogSeo } from '@components/SEO'
import Tag from '@components/Tag'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Six, Four, Two } from '@components/Grid'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer } from '@components/MDXComponents'

import LinkData from '@data/links.json'

const postDateTemplate = {
  timeZone: 'UTC',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default function PostLayout({ children, frontMatter }) {
  const { slug, title, publishedOn, updatedOn, tags } = frontMatter

  const date = updatedOn ? updatedOn : publishedOn

  // Filter `LinkData` to only the links that reference this page as the destination.
  const LinkRefs = LinkData.filter((link) => link.dest.includes(slug))

  return (
    <>
      <BlogSeo url={`${siteMetadata.siteUrl}/articles/${frontMatter.slug}`} {...frontMatter} />
      <Container className="mt-32">
        <article>
          <header className="text-center mb-16">
            <Grid>
              <Eight className="lg:!col-start-3">
                <PageTitle>{title}</PageTitle>
              </Eight>
            </Grid>
          </header>
          <div className="mb-24" style={{ gridTemplateRows: 'auto 1fr' }}>
            <Grid>
              <Eight className="lg:col-start-3 prose prose-md lg:prose-lg dark:prose-dark mx-auto">
                <MDXLayoutRenderer mdxSource={children} frontMatter={frontMatter} />
                <footer className="mt-12">
                  <div className="p-8 bg-steel bg-opacity-5 rounded-sm mb-12">
                    {LinkRefs.length > 0 && (
                      <>
                        <p className="text-xl font-bold !mt-0">Linked references</p>
                        <div className="grid grid-flow-col grid-cols-2 gap-4 mb-8">
                          {LinkRefs.map((link) => {
                            const { src, title, text } = link
                            return (
                              <CustomLink
                                key={src}
                                href={src}
                                className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-500 rounded-sm"
                              >
                                <span className="block text-base font-medium mb-2">{title}</span>
                                <span className="block text-sm text-gray-500 dark:text-gray-300 font-normal">
                                  {text}
                                </span>
                              </CustomLink>
                            )
                          })}
                        </div>
                      </>
                    )}
                    <p className="text-base font-bold text-gray-500 dark:text-gray-400 !my-0">
                      Last updated:{' '}
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </p>
                  </div>
                  <CustomLink
                    href="/articles"
                    className="text-sea hover:text-orange transition-all"
                  >
                    &larr; See my other articles
                  </CustomLink>
                </footer>
              </Eight>
            </Grid>
          </div>
        </article>
      </Container>
    </>
  )
}
