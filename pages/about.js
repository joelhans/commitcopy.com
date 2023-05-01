import React from 'react'
import Image from 'next/image'
import Link from '@components/Link'
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
      <header className="relative z-10 mt-48 pb-24">
        <Container>
          <Grid className="">
            <Six className="prose prose-lg dark:prose-dark">
              <h3 className="!text-purple dark:!text-gray-200 !text-4xl lg:!text-5xl !font-bold !mb-4">
                Hey, I&rsquo;m Joel.
              </h3>
              <h1 className="!text-sea !text-base lg:!text-lg !italic !leading-snug !mb-12">
                Writer for open source && cloud native
              </h1>
              <p className="text-xl lg:text-2xl font-medium">
                I help technical startups and established companies create{' '}
                <span className="text-orange font-bold">commitment</span> through technical and
                opinionated copy and content.
              </p>
              <p className="lg:text-lg">
                But before I tell more of my story, let's talk about <em>that</em> word.
              </p>
            </Six>
            <Six className="hidden lg:block">
              <Image
                className="rounded-lg"
                src="/static/images/index_hero-3.jpg"
                alt="Start a copywriting project with Joel Hans, SaaS and tech copywriter for generating commitment"
                height={1200}
                width={1200}
              />
            </Six>
          </Grid>
        </Container>
      </header>
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Eight className="prose prose-lg dark:prose-dark">
              <h2 className="!text-purple dark:!text-sea">
                Once upon a time, you committed to the work you're doing today.
              </h2>
              <p>
                You launched a new startup. Took a new job that expanded your opportunities (and
                your obligations!). Started publicizing a project you've been building in stealth
                mode. Whatever your motivations, there came a moment where you had to decide about
                the next few months or years of your working life.
              </p>
              <p>&ldquo;Today is the day. That's the direction I'm headed.&rdquo;</p>
              <h2 className="!text-purple dark:!text-sea">
                A moment that's equal parts thrilling, terrifying, and necessary.
              </h2>
              <p>
                That's how your customers are feeling, too. They're also looking to make a change,
                and that's not the time to rush or bully them into a decision. It's definitely not
                the time to “convert” them (yuck!) either.
              </p>
              <p>
                Instead, you have an opportunity to be a guiding force. To inspire them, through
                honesty, to make their best possible decision.
              </p>
              <h2 className="!text-purple dark:!text-sea">
                Commit to others the way you want to them to commit to you… right?
              </h2>
              <p>
                Let's talk about my commitments&mdash;{' '}
                <span className="text-sm text-orange">
                  (Like dropping into this feature for the first time!)
                </span>
              </p>
            </Eight>
          </Grid>
          <Grid>
            <Twelve className="z-0 my-24">
              <Image
                className="rounded-lg"
                src="/static/images/joel-bike-riding-02.jpg"
                alt="Joel Hans, commitment copywriter for B2B, SaaS, and open source, with his mountain bike"
                width={2000}
                height={914}
              />
            </Twelve>
          </Grid>
          <Grid>
            <Eight className="prose prose-lg dark:prose-dark">
              <h2 className="!text-sea !italic">
                2016. I had just finished up my Master's in Creative Writing (MFA) from the
                University of Arizona.
              </h2>
              <p>
                The great thing about an open-ended, creative degree is that you can pair writing
                with something else you're passionate about, and all of a sudden, you're living the
                dream. I've been a desktop Linux user for twenty years, and have always had a
                passion for technology&mdash;time to buckle down, go freelance, and pave my own way.
              </p>
              <h2 className="!text-sea !italic">
                2017. Full-speed ahead with <em>Nurse Media</em>!
              </h2>
              <p>
                I focused on technical writing and I found a few steady clients, who gave me the
                opportunity to write about every tech acronym under the sun: AI, ML, IoT, CI/CD,
                SRE, AIOps, LAMP, k8s, eBPF, and a whole lot more. But I also started feeling
                directionless. Was my work actually having an impact? Was it helping anyone?
              </p>
              <h2 className="!text-sea !italic">
                2019. A surprise job offer meant dramatic, unexpected change.
              </h2>
              <p>
                A surprise job offer: To lead documentation and educational writing for a
                new-and-growing startup. I spent the next two years on user documentation and
                developer experience, creating content that genuinely helped people be better at
                their jobs and build more resilient infrastructure. I loved it. I learned what
                genuinely useful technical writing looks like.
              </p>
              <h2 className="!text-sea !italic">
                2021. VC-funded growth curves demand SEO trickery over copy &amp; content that leads
                through education and inspiration.
              </h2>
              <p>
                I was asked to produce content designed for search crawlers, not people. The work
                lost its sense of honesty. It was designed to “convert” (aka trick) readers into
                clicking on a download link or fill out a lead generation form. I needed to get back
                to my roots: Telling stories that inspire people to jump in.
              </p>
              <h2 className="!text-orange">
                I committed to a creative business for open source and cloud native brands that
                value empowering people, not extracting profit.
              </h2>
              <p>You're here because that sounds good to you, too.</p>
              <p>
                We want to genuinely help people learn more and work smarter. We believe technology
                can be a force for good, not just conversion, growth, and retention. We care about
                sharing stories over code. We're building for people, not bots.
              </p>
            </Eight>
          </Grid>
        </Container>
      </section>
      <section className="py-24 dark:bg-gray-900">
        <Container>
          <Grid>
            <Twelve className="mb-12">
              <p className="text-purple dark:text-gray-50 text-lg lg:text-xl font-bold leading-snug">
                Some fun{' '}
                <code className="text-sm lg:text-base text-orange font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  &amp;&amp;
                </code>{' '}
                odd facts about me:
              </p>
            </Twelve>
          </Grid>
          <Grid className="!items-start gap-y-12 md:!gap-y-12">
            <Four className="">
              <p className="text-purple dark:text-gray-100 text-lg lg:text-xl font-medium">
                I'm a father to two phenomenal daughters: Mabel and Ida.
              </p>
            </Four>
            <Four className="">
              <p className="text-purple dark:text-gray-100 text-lg lg:text-xl font-medium">
                I'm an avid (and published, but who's counting) fiction writer. Check out a personal
                favorite:{' '}
                <Link
                  href="http://notokensjournal.com/fiction/a-man-his-oblations/"
                  className="text-orange hover:text-sea transition-all"
                >
                  &ldquo;A Man, His Oblations.&rdquo;
                </Link>
              </p>
            </Four>
            <Four>
              <p className="text-purple dark:text-gray-100 text-lg lg:text-xl font-medium">
                I mountain bike through the Sonoran desert no less than twice a week and I have the
                scars to prove it.
              </p>
            </Four>
            <Four>
              <p className="text-purple dark:text-gray-100 text-lg lg:text-xl font-medium">
                I'm fostering a desert tortoise named Amaranth.
              </p>
            </Four>
            <Four>
              <p className="text-purple dark:text-gray-100 text-lg lg:text-xl font-medium">
                Two decades after falling in love with HTML and CSS for the first time, I still
                build for the web—this website runs on a custom, open-source stack with NextJS, MDX,
                Tailwind, and Vercel.
              </p>
            </Four>
            <Four>
              <p className="text-purple dark:text-gray-100 text-lg lg:text-xl font-medium">
                I genuinely love commitment&mdash;<em>see below for proof</em>.
              </p>
            </Four>
          </Grid>
        </Container>
      </section>
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
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
    </>
  )
}
