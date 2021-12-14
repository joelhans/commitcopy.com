import React from 'react'
import Image from 'next/image'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import Link from '@components/Link'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Eight } from '@components/Grid'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'about/about')
  const AboutCreative = await getSingleContent(BASE_CONTENT_PATH, 'about/creative')
  const AboutTech = await getSingleContent(BASE_CONTENT_PATH, 'about/technical')
  return {
    props: {
      content,
      AboutCreative,
      AboutTech,
    },
  }
}

export default function About({ content, AboutCreative, AboutTech }) {
  const { mdxSource, frontMatter } = content
  const { mdxSource: mdxAboutCreative } = AboutCreative
  const { mdxSource: mdxAboutTech } = AboutTech

  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/${frontMatter.slug}`}
      />
      <header className="mt-24 mb-16">
        <Container>
          <Grid>
            <Eight>
              <h2 className="!text-orange !text-3xl font-mono !font-bold !mb-4">
                Hello{' '}
                <code className="text-3xl lg:text-4xl text-orange font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  &amp;&amp;
                </code>{' '}
                welcome!
              </h2>
              <h1 className="!text-sea !text-6xl !font-medium !mb-8">
                Joel here&mdash;the open-source copywriter.
              </h1>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
              </div>
            </Eight>
            <div className="col-span-6 col-start-4 lg:col-span-4">
              <Image
                className="rounded-lg"
                src="/static/images/joel-large.jpg"
                width={750}
                height={1000}
              />
            </div>
          </Grid>
        </Container>
      </header>
      <section className="py-16">
        <Container className="">
          <Grid>
            <div className="relative col-span-12 lg:col-span-10 prose prose-lg dark:prose-dark mt-12 p-8 bg-sea bg-opacity-5 rounded-lg">
              <h3 className="absolute !text-sea !text-4xl !font-medium !-mt-20">Creative, eh?</h3>
              <MDXExport code={mdxAboutCreative} />
            </div>
          </Grid>
          <Grid className="mt-24">
            <div className="relative col-span-12 lg:col-span-10 prose prose-lg dark:prose-dark mt-32 lg:mt-12 p-8 bg-orange bg-opacity-5 dark:bg-opacity-20 rounded">
              <h3 className="absolute !text-orange !text-4xl !font-medium !-mt-20">
                Just how technical?
              </h3>
              <MDXExport code={mdxAboutTech} />
            </div>
          </Grid>
        </Container>
      </section>
    </>
  )
}
