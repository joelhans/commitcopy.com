import React from 'react'
import Image from 'next/image'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Ten, Eight, Four, Six, Two } from '@components/Grid'
import { ServiceGo, ServicePrice, ServiceButton } from '@components/Service'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'services')
  const ServiceWebsiteCopy = await getSingleContent(BASE_CONTENT_PATH, 'services/website-copy')
  const ServiceSourceStory = await getSingleContent(BASE_CONTENT_PATH, 'services/source-story')
  const ServiceOneDay = await getSingleContent(BASE_CONTENT_PATH, 'services/one-day-commit')

  return { props: { content, ServiceWebsiteCopy, ServiceSourceStory, ServiceOneDay } }
}

export default function Services({
  content,
  ServiceWebsiteCopy,
  ServiceSourceStory,
  ServiceOneDay,
}) {
  const { mdxSource, frontMatter } = content
  const { mdxSource: mdxServiceWebsiteCopy } = ServiceWebsiteCopy
  const { mdxSource: mdxServiceSourceStory } = ServiceSourceStory
  const { mdxSource: mdxServiceOneDay } = ServiceOneDay

  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/${frontMatter.slug}`}
      />
      <header className="mt-24 mb-12">
        <Container>
          <Grid>
            <Eight>
              <h1 className="text-purple dark:text-gray-50 text-xl lg:text-2xl font-bold uppercase leading-snug mb-8">
                {frontMatter.title}
              </h1>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <p className="text-sea text-3xl lg:text-4xl font-medium !leading-snug">
                  {frontMatter.summary}
                </p>
                <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
              </div>
            </Eight>
            <Four>
              <Image
                className="opacity-50"
                src="/static/images/services-waves.svg"
                width={250}
                height={500}
              />
            </Four>
          </Grid>
        </Container>
      </header>
      <section id="services" className="pb-16 dark:bg-gray-900">
        <Container>
          <Grid className="mb-12">
            <Two className="text-center">
              <Image
                className="opacity-50"
                src="/static/images/services-website.svg"
                width={52}
                height={165}
              />
            </Two>
            <Ten
              id="website-copy"
              className="px-8 py-12 bg-purple bg-opacity-5 dark:bg-opacity-20 rounded"
            >
              <h3 className="text-orange text-4xl font-mono font-bold mb-4">Website copywriting</h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceWebsiteCopy} />
              </div>
              <ServiceGo>
                <ServiceButton to="/get-started/">
                  <code className="text-lg text-orange font-bold bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    init
                  </code>{' '}
                  a new website
                </ServiceButton>
              </ServiceGo>
            </Ten>
          </Grid>
          <Grid>
            <Ten
              id="source-story"
              className="px-8 py-12 bg-orange bg-opacity-5 dark:bg-opacity-20 rounded"
            >
              <h3 className="text-orange text-4xl font-mono font-bold mb-4">Source Story</h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceSourceStory} />
              </div>
              <ServiceGo>
                <ServiceButton to="/get-started/">Discover your source</ServiceButton>
              </ServiceGo>
            </Ten>
            <Two className="text-center">
              <Image
                className=""
                src="/static/images/services-source.svg"
                width={80}
                height={142}
              />
            </Two>
          </Grid>
        </Container>
      </section>
      <section id="one-day-commit" className="py-16 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Eight>
              <h2 className="text-purple dark:text-gray-50 text-xl lg:text-2xl font-bold uppercase leading-snug whitespace-nowrap mr-6">
                Need copy <em>right now</em>? Not ready for a full open-source copywriting project?
              </h2>
              <h3 className="text-orange text-4xl lg:text-5xl font-mono font-bold mt-4 mb-4">
                The One-Day Commit
              </h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceOneDay} />
              </div>
              <ServiceGo>
                <ServicePrice>$1,995</ServicePrice>
                <ServiceButton to="/get-started/">Commit to it</ServiceButton>
              </ServiceGo>
            </Eight>
            <div className="hidden lg:block col-span-4 opacity-20">
              <Image src="/static/images/services-one-day.svg" height={512} width={512} />
            </div>
          </Grid>
        </Container>
      </section>
    </>
  )
}
