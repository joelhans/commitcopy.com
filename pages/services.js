import React from 'react'
import Image from 'next/image'
import Link from '@components/Link'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Four, Six, Two } from '@components/Grid'
import { ServiceGo, ServicePrice, ServiceButton } from '@components/Service'
import { Testimonial, TestimonialHoriz } from '@components/Testimonial'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'services')
  const ServiceWebsiteCopy = await getSingleContent(BASE_CONTENT_PATH, 'services/website-copy')
  const ServiceContent = await getSingleContent(BASE_CONTENT_PATH, 'services/content')
  const ServiceSourceStory = await getSingleContent(BASE_CONTENT_PATH, 'services/source-story')
  const ServiceOneDay = await getSingleContent(BASE_CONTENT_PATH, 'services/one-day-commit')

  return {
    props: { content, ServiceWebsiteCopy, ServiceContent, ServiceSourceStory, ServiceOneDay },
  }
}

export default function Services({
  content,
  ServiceWebsiteCopy,
  ServiceContent,
  ServiceSourceStory,
  ServiceOneDay,
}) {
  const { mdxSource, frontMatter } = content
  const { mdxSource: mdxServiceWebsiteCopy } = ServiceWebsiteCopy
  const { mdxSource: mdxServiceSourceStory } = ServiceSourceStory
  const { mdxSource: mdxServiceContent } = ServiceContent
  const { mdxSource: mdxServiceOneDay } = ServiceOneDay

  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/${frontMatter.slug}`}
      />
      <header className="mt-24 mb-20">
        <Container>
          <Grid>
            <Six>
              <h1 className="text-purple dark:text-gray-50 text-xl lg:text-2xl font-bold uppercase leading-snug mb-8">
                {frontMatter.title}
              </h1>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <p className="text-sea text-3xl lg:text-4xl font-medium !leading-snug">
                  {frontMatter.summary}
                </p>
                <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
              </div>
            </Six>
            <Six className="hidden md:block">
              <Image
                className="rounded-lg"
                src="/static/images/services_hero.jpg"
                alt="Joel Hans, B2B copywriter for generating commitment"
                height={1200}
                width={800}
              />
            </Six>
          </Grid>
        </Container>
      </header>
      <section id="services" className="pb-16 dark:bg-gray-900">
        <Container>
          <h2 className="text-purple dark:text-white text-3xl lg:text-4xl font-medium text-center mb-16">
            Here's how I help:
          </h2>
          <Grid className="mb-16">
            <Eight
              id="source-story"
              className="px-8 py-12 bg-orange bg-opacity-5 dark:bg-opacity-20 rounded"
            >
              <h3 className="text-purple dark:text-white text-3xl lg:text-4xl font-medium mb-4">
                Brand messaging
              </h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceSourceStory} />
              </div>
              <ServiceGo>
                <ServiceButton to="/get-started/">Discover your source</ServiceButton>
              </ServiceGo>
            </Eight>
            <Four className="hidden md:block text-center">
              <Image
                className=""
                src="/static/images/services-source.svg"
                alt="Brand strategy"
                width={80}
                height={142}
              />
            </Four>
          </Grid>
          <Grid className="mb-16">
            <Four className="hidden md:block text-center">
              <Image
                className="opacity-50"
                src="/static/images/services-website.svg"
                alt="Website copy"
                width={52}
                height={165}
              />
            </Four>
            <Eight
              id="website-copy"
              className="px-8 py-12 bg-purple bg-opacity-5 dark:bg-opacity-20 rounded"
            >
              <h3 className="text-purple dark:text-white text-3xl lg:text-4xl font-medium mb-4">
                Website copy
              </h3>
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
            </Eight>
          </Grid>
          <Grid>
            <Eight
              id="content"
              className="px-8 py-12 bg-orange bg-opacity-5 dark:bg-opacity-20 rounded"
            >
              <h3 className="text-purple dark:text-white text-3xl lg:text-4xl font-medium mb-4">
                Content strategy &amp; execution
              </h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceContent} />
              </div>
              <ServiceGo>
                <ServiceButton to="/get-started/">Commit to content</ServiceButton>
              </ServiceGo>
            </Eight>
            <Four className="hidden md:block text-center">
              <Image
                className="opacity-75"
                src="/static/images/services-waves.svg"
                alt="Content strategy &amp; execution"
                width={150}
                height={300}
              />
            </Four>
          </Grid>
        </Container>
      </section>
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Testimonial
            name="Jennifer Briston"
            title="Marketing Manager, Netdata"
            img="jennifer-briston.jpg"
          >
            Joel did an amazing job with collaborating on creating the Netdata website. He has a
            unique skillset of understanding technical products with the ability to translate the
            value to a wide range of audiences. I'd gladly work with Joel again&mdash;he goes out of
            his way to provide his team support and the materials needed to execute projects.
          </Testimonial>
        </Container>
      </section>
      <section className="py-24 dark:bg-gray-900">
        <Container>
          <Grid>
            <Ten className="hidden lg:block !col-start-2">
              <Image
                className="rounded-lg"
                src="/static/images/joel-computer.jpg"
                alt="Start a copywriting project with Joel Hans, SaaS and tech copywriter for generating commitment"
                height={1200}
                width={1800}
              />
            </Ten>
          </Grid>
        </Container>
      </section>
      <section id="one-day-commit" className="py-16 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Eight>
              <h2 className="text-purple dark:text-gray-50 text-xl lg:text-2xl font-bold uppercase leading-snug mr-6">
                Need copy <em>right now</em>? Not ready for a full copywriting project?
              </h2>
              <h3 className="text-orange text-4xl lg:text-5xl font-mono font-bold mt-4 mb-4">
                The One-Day Commit
              </h3>
              <div className="prose dark:prose-dark mb-8">
                <MDXExport code={mdxServiceOneDay} />
              </div>
              <ServiceGo>
                <ServicePrice>$1,495</ServicePrice>
                <ServiceButton to="/get-started/">Commit to it</ServiceButton>
              </ServiceGo>
            </Eight>
            <div className="hidden lg:block col-span-4 opacity-20">
              <Image
                src="/static/images/services-one-day.svg"
                alt="The One-Day Commit"
                height={512}
                width={512}
              />
            </div>
          </Grid>
        </Container>
      </section>
    </>
  )
}
