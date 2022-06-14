import React from 'react'
import Image from 'next/image'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer, MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Six, Four, Two } from '@components/Grid'

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
      <header className="relative z-10 mt-24 -mb-48">
        <Container>
          <Grid className="!items-start">
            <Six className="mt-32">
              {/* <p className="text-purple dark:text-gray-50 text-sm lg:text-base font-bold uppercase leading-snug mb-12">
                Hello{' '}
                <code className="text-sm lg:text-base text-orange font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  &amp;&amp;
                </code>{' '}
                welcome!
              </p> */}
              <h3 className="text-purple dark:text-gray-200 text-4xl lg:text-5xl font-medium mb-4">
                Hey, I’m Joel.
              </h3>
              <h1 className="text-sea lg:text-lg italic !leading-snug mb-12">
                Commitment copywriter and brand messaging strategist
              </h1>
              <p className="text-xl lg:text-2xl font-medium mb-8">
                I help B2B, SaaS, and open-source companies tell stories that drive commitment.
              </p>
              <p className="lg:text-lg">
                But before I tell more of my story, let's talk about <em>that</em> word.
              </p>
            </Six>
            <div className="col-span-6 col-start-4 lg:col-start-auto -mr-12">
              <Image
                className="rounded-lg"
                src="/static/images/joel-bike.jpg"
                alt="Joel Hans, commitment copywriter for B2B, SaaS, and open source, with his mountain bike"
                width={800}
                height={1200}
              />
            </div>
          </Grid>
        </Container>
      </header>
      <section className="pb-16 dark:bg-gray-900">
        <Container>
          <Grid>
            <Eight className="z-10 bg-purple -mx-12 p-12 rounded-lg">
              <h2 className="text-orange text-3xl lg:text-4xl font-medium !leading-tight mb-8">
                Once upon a time, you committed to the work you’re doing today.
              </h2>
              <p className="text-white text-lg lg:text-xl mb-6">
                You launched a new startup. Took a new job that expanded your opportunities (and
                your obligations!). Started publicizing a project you’ve been building in stealth
                mode. Whatever your motivations, there came a moment where you had to make a
                decision about the next few months or years of your working life.
              </p>
              <p className="text-white text-lg lg:text-xl italic mb-6">
                &ldquo;Today is the day. That's the direction I'm headed.&rdquo;
              </p>
            </Eight>
          </Grid>
        </Container>
        <Container>
          <Grid>
            <Eight className="!z-0 !col-start-7 bg-sea -mt-16 -mx-12 pt-28 p-12 rounded-lg">
              <h2 className="text-purple text-3xl lg:text-4xl font-medium !leading-tight mb-8">
                Equal parts thrilling and terrifying, right?
              </h2>
              <p className="text-white text-lg lg:text-xl mb-6">
                That’s how your customers are feeling, too. They're also looking to make a change,
                and that’s not the time to rush or bully them into a decision. It’s definitely not
                the time to “convert” them (yuck!) either. Instead, you have an opportunity to be a
                guiding force. To honestly inspire them to make their best possible decision.
              </p>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section className="pt-64 py-16 dark:bg-gray-800">
        <Container>
          <Grid className="mb-16">
            <Eight className="z-10 -mt-48 -mx-12 p-12 bg-orange rounded-lg">
              <h2 className="text-purple text-4xl lg:text-5xl font-bold mb-8">
                Commit to others the way you want to them to commit to you… right?
              </h2>
              <p className="text-white text-2xl lg:text-3xl font-medium mb-4">
                Let's talk about my commitments&mdash;
              </p>
              <span className="text-white text-base">
                (Like dropping into this feature for the first time!)
              </span>
            </Eight>
            <Twelve className="z-0 -mt-56">
              <Image
                className="rounded-lg"
                src="/static/images/joel-bike-riding-02.jpg"
                alt="Joel Hans, commitment copywriter for B2B, SaaS, and open source, with his mountain bike"
                width={2000}
                height={914}
              />
            </Twelve>
          </Grid>
          <Grid className="mb-12">
            <Six>
              <h3 className="text-sea text-3xl font-medium italic mb-4">
                2016. I had just finished up my Master's in Creative Writing (MFA) from the
                University of Arizona.
              </h3>
              <p className="lg:text-lg">
                The great thing about an open-ended degree is that you can pair writing with
                something else you’re passionate about, you’re living the dream. I’ve been a desktop
                Linux user for twenty years, and have always had a passion for technology—time to
                buckle down, go freelance, and pave my own way.
              </p>
            </Six>
          </Grid>
          <Grid className="mb-12">
            <Six className="!col-start-7">
              <h3 className="text-sea text-3xl font-medium italic mb-4">
                2017. Full-speed ahead with <em>Nurse Media</em>!
              </h3>
              <p className="lg:text-lg">
                I focused on technical writing I found a few steady clients, who gave me the
                opportunity to write about every tech acronym under the sun: AI, ML, IoT, CI/CD,
                SRE, AIOps, LAMP, k8s, eBPF, and a whole lot more. But I also started feeling
                directionless. Was my work actually having an impact? Was it helping anyone?
              </p>
            </Six>
          </Grid>
          <Grid className="mb-12">
            <Six>
              <h3 className="text-sea text-3xl font-medium italic mb-4">
                2019. A surprise job offer meant dramatic, unexpected change.
              </h3>
              <p className="lg:text-lg">
                A surprise job offer: To lead documentation and educational writing for a
                new-and-growing startup. I spent the next two years on user documentation and
                developer experience, creating content that genuinely helped people be better at
                their jobs and build more resilient infrastructure. I loved it. I learned what
                genuinely useful technical writing looks like.
              </p>
            </Six>
          </Grid>
          <Grid>
            <Six className="!col-start-7">
              <h3 className="text-sea text-3xl font-medium italic mb-4">
                2021. VC-funded growth curves demand SEO trickery over creativity.
              </h3>
              <p className="lg:text-lg">TK</p>
            </Six>
          </Grid>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <Grid>
            <Twelve>
              <Image
                className="rounded-lg"
                src="/static/images/joel-bike-riding-01.jpg"
                alt="Joel Hans, commitment copywriter for B2B, SaaS, and open source, with his mountain bike"
                width={2000}
                height={914}
              />
            </Twelve>
          </Grid>
        </Container>
      </section>

      {/* <section className="py-16 bg-gray-50 dark:bg-gray-800">
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
      </section> */}
    </>
  )
}
