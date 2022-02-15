import Image from 'next/image'
import Link from '@components/Link'
import { PageSeo } from '@components/SEO'
import PageTitle from '@components/PageTitle'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Six, Four, Two } from '@components/Grid'

export default function WorkLayout({ children, frontMatter }) {
  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/work/${frontMatter.slug}`}
      />
      <header className="mt-24 mb-12">
        <Container>
          <Grid>
            <Eight>
              <span className="block text-purple dark:text-gray-50 text-lg lg:text-xl font-bold uppercase leading-snug mb-8">
                <Link className="hover:text-sea" href="/work">
                  Work
                </Link>{' '}
                | {frontMatter.title} • {frontMatter.type}
              </span>
              <PageTitle>{frontMatter.title}</PageTitle>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <p className="font-medium text-sea text-2xl">{frontMatter.summary_long}</p>
              </div>
            </Eight>
            <Twelve className="border border-gray-200 rounded-lg">
              <Image
                className="rounded-lg"
                src={`/static/projects/${frontMatter.slug}/hero.png`}
                width="1440"
                height="755"
                alt={`Copywriting and content work for ${frontMatter.title}`}
              />
            </Twelve>
          </Grid>
        </Container>
      </header>
      <section className="mb-16">
        <Container>
          <Grid>
            <Eight>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <MDXLayoutRenderer mdxSource={children} frontMatter={frontMatter} />
              </div>
              <div className="mt-12">
                <Link className="text-sea text-lg font-medium" href="/work/">
                  &larr; Back to work
                </Link>
              </div>
            </Eight>
          </Grid>
        </Container>
      </section>
    </>
  )
}
