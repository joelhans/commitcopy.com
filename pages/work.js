import React from 'react'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Ten, Eight, Six, Four, Two } from '@components/Grid'
import Testimonial from '@components/Testimonial'
import ClientLogo from '@components/ClientLogo'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'work/work')
  const IndexWorkIMGSRVR = await getSingleContent(BASE_CONTENT_PATH, 'work/img-srvr-short')
  const IndexWorkIBM = await getSingleContent(BASE_CONTENT_PATH, 'work/ibm-short')
  const IndexWorkOpentext = await getSingleContent(BASE_CONTENT_PATH, 'work/opentext-short')
  const IndexWorkNetdata = await getSingleContent(BASE_CONTENT_PATH, 'work/netdata-short')
  const WorkRTInsights = await getSingleContent(BASE_CONTENT_PATH, 'work/rtinsights-short')
  const WorkSSDNodes = await getSingleContent(BASE_CONTENT_PATH, 'work/ssdnodes-short')
  return {
    props: {
      content,
      IndexWorkIMGSRVR,
      IndexWorkIBM,
      IndexWorkOpentext,
      IndexWorkNetdata,
      WorkRTInsights,
      WorkSSDNodes,
    },
  }
}

const WorkItem = ({ code, src, name, width, height }) => (
  <Six className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
    <h2 className="mb-4">
      <span className="invisible">{name}</span>
      <ClientLogo className="!justify-start" src={src} name={name} width={width} height={height} />
    </h2>
    <article className="prose dark:prose-dark">
      <MDXExport code={code} />
    </article>
  </Six>
)

export default function Services({
  content,
  IndexWorkIMGSRVR,
  IndexWorkIBM,
  IndexWorkOpentext,
  IndexWorkNetdata,
  WorkRTInsights,
  WorkSSDNodes,
}) {
  const { mdxSource, frontMatter } = content
  const { mdxSource: mdxWorkIMGSRVR } = IndexWorkIMGSRVR
  const { mdxSource: mdxWorkIBM } = IndexWorkIBM
  const { mdxSource: mdxWorkOpentext } = IndexWorkOpentext
  const { mdxSource: mdxWorkNetdata } = IndexWorkNetdata
  const { mdxSource: mdxRTInsights } = WorkRTInsights
  const { mdxSource: mdxSSDNodes } = WorkSSDNodes

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
            <WorkItem
              code={mdxWorkIMGSRVR}
              src="img-srvr.png"
              name="IMG SRVR"
              width="82"
              height="42"
            />
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
              code={mdxWorkOpentext}
              src="opentext.svg"
              name="OpenText"
              width="137"
              height="28"
            />
            <WorkItem
              code={mdxRTInsights}
              src="opentext.svg"
              name="OpenText"
              width="137"
              height="28"
            />
          </Grid>
          <p className="text-purple dark:text-gray-50 text-lg font-medium mt-8 italic text-center">
            More samples available upon request.
          </p>
        </Container>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <Container>
          <Testimonial
            name="Jennifer Briston"
            title="Marketing Manager, Netdata"
            img="jennifer-briston.jpg"
          >
            Joel did an amazing job with collaborating on creating the Netdata website. He has a
            unique skillset of understanding technical products with the ability to translate the
            value to a wide range of audiences. I'd gladly work with Joel again, he goes out of his
            way to provide his team support and the materials needed to execute projects.
          </Testimonial>
        </Container>
      </section>
    </>
  )
}
