import React from 'react'
import Image from 'next/image'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Ten, Eight, Six, Four, Two } from '@components/Grid'

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
            <Six>
              <h2 className="text-purple dark:text-gray-50 text-xl lg:text-2xl font-bold uppercase leading-snug mb-8">
                Hello{' '}
                <code className="text-xl lg:text-2xl text-orange font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  &amp;&amp;
                </code>{' '}
                welcome!
              </h2>
              <p className="text-sea text-3xl lg:text-4xl font-medium !leading-snug mb-6">
                {frontMatter.summary}
              </p>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
              </div>
            </Six>
            <div className="col-span-6 col-start-4 lg:col-start-auto">
              <Image
                className="rounded-lg"
                src="/static/images/about_hero.jpg"
                alt="Joel Hans, copywriter specialized in generating commitment for B2B, B2D, and SaaS tech brands"
                width={800}
                height={1200}
              />
            </div>
          </Grid>
        </Container>
      </header>
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <Container className="">
          <Grid className="!items-start">
            <div className="relative col-span-12 lg:col-span-6 prose prose-lg dark:prose-dark mt-12 p-8 bg-sea bg-opacity-5 rounded-lg">
              <h3 className="absolute !text-sea !text-4xl !font-medium !-mt-20">Creative, eh?</h3>
              <MDXExport code={mdxAboutCreative} />
            </div>
            <div className="relative col-span-12 lg:col-span-6 prose prose-lg dark:prose-dark mt-32 lg:mt-12 p-8 bg-orange bg-opacity-5 dark:bg-opacity-20 rounded">
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
