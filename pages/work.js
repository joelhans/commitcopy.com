import React from 'react'
import Image from 'next/image'
import { getSingleContent, getFrontMatter } from '@/lib/mdx'
import Link from '@components/Link'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH, WORK_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Ten, Eight, Six, Four, Two } from '@components/Grid'
import Testimonial from '@components/Testimonial'
import ClientLogo from '@components/ClientLogo'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'work/work')
  const projects = await getFrontMatter(WORK_CONTENT_PATH)
  const WorkLatest = await getSingleContent(BASE_CONTENT_PATH, 'work/latest-content')
  return {
    props: {
      content,
      projects,
      WorkLatest,
    },
  }
}

const WorkItemFull = ({ title, slug, summary, logoSrc, logoWidth, logoHeight }) => (
  <Six
    key={title}
    className="bg-gray-50 dark:bg-gray-800 hover:bg-purple hover:bg-opacity-5 dark:hover:bg-gray-700 rounded-lg transition-all"
  >
    <Link className="block p-8" href={`/work/${slug}`}>
      <Image
        className="rounded-lg -ml-8"
        src={`/static/projects/${slug}/hero.png`}
        width="1440"
        height="755"
        alt={`Copywriting and content work for ${title}`}
      />
      <h2 className="mt-4 mb-4 h-20">
        <span className="absolute invisible">{title}</span>
        <ClientLogo
          className="!justify-start"
          src={logoSrc}
          name={title}
          width={logoWidth}
          height={logoHeight}
        />
      </h2>
      <article className="prose dark:prose-dark mb-4">
        <p className="text-purple dark:text-white text-xl lg:text-2xl font-medium">{summary}</p>
      </article>
    </Link>
  </Six>
)

export default function Services({ content, projects, WorkLatest }) {
  const { mdxSource, frontMatter } = content
  const { mdxSource: mdxLatest } = WorkLatest

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
              </div>
            </Eight>
          </Grid>
        </Container>
      </header>
      <section className="mb-16">
        <Container>
          <Grid>
            <Eight>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
              </div>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section id="portfolio" className="mb-16">
        <Container>
          <Grid className="items-stretch">
            {projects.map((project) => {
              return (
                <WorkItemFull
                  key={project.slug}
                  title={project.title}
                  slug={project.slug}
                  summary={project.summary}
                  logoSrc={project.logoSrc}
                  logoWidth={project.logoWidth}
                  logoHeight={project.logoHeight}
                />
              )
            })}
          </Grid>
          {/* <Grid className="items-stretch">
            <WorkItem code={mdxWorkIBM} src="ibm.svg" name="IBM" width="100" height="40" />
            <WorkItem
              code={mdxWorkNetdata}
              src="netdata.svg"
              name="Netdata"
              width="164"
              height="32"
            />
            <WorkItem
              code={mdxSSDNodes}
              src="ssd-nodes.svg"
              name="SSD Nodes"
              width="173"
              height="20"
            />
            <WorkItem
              code={mdxRTInsights}
              src="rt-insights.svg"
              name="RTInsights"
              width="140"
              height="36"
            />
          </Grid> */}
          <p className="text-purple dark:text-gray-50 text-lg font-medium mt-8 italic text-center">
            More samples available upon request.
          </p>
        </Container>
      </section>
      <section className="mb-16">
        <Container>
          <Grid>
            <Eight>
              <div className="prose prose-md lg:prose-lg dark:prose-dark">
                <MDXExport code={mdxLatest} />
              </div>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <Container>
          <Testimonial
            name="Matt Connor"
            title="CEO, Strasmore &amp; SSD Nodes"
            img="matt-connor.jpg"
          >
            Joel was our first marketing hire and has been a key member of our marketing team since
            2016. Joel is deeply and uniquely talented in voice, branding, and copywriting. I
            strongly recommend taking the opportunity to work with him.
          </Testimonial>
        </Container>
      </section>
    </>
  )
}
