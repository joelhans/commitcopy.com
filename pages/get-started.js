import React from 'react'
import { InlineWidget } from 'react-calendly'
import { getSingleContent } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH } from '@config/constants'
import PageTitle from '@components/PageTitle'
import siteMetadata from '@data/siteMetadata'
import { MDXLayoutRenderer } from '@components/MDXComponents'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

export async function getStaticProps() {
  const content = await getSingleContent(BASE_CONTENT_PATH, 'get-started')
  return { props: { content } }
}

export default function GetStarted({ content }) {
  const { mdxSource, frontMatter } = content

  return (
    <>
      <PageSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        url={`${siteMetadata.siteUrl}/${frontMatter.slug}`}
      />
      <header className="mt-24">
        <PageTitle>{frontMatter.title}</PageTitle>
        <div className="prose prose-md lg:prose-lg dark:prose-dark">
          <p className="text-xl md:text-2xl lg:text-3xl text-steel">
            {frontMatter.summary} {frontMatter.summary_cont}
          </p>
        </div>
      </header>
      <div className="prose prose-md lg:prose-lg dark:prose-dark mt-8 md:mt-16 mb-24">
        <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="prose col-span-4">
          <h3 className="!text-3xl !text-sea">A few important notes</h3>
          <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
            <AccordionItem className="mb-4 px-4 py-2 border rounded">
              <AccordionItemHeading>
                <AccordionItemButton className="text-xl font-medium">
                  Copywriting rates
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="prose mt-4">
                <p>Every project is custom, and every custom project gets its own quote.</p>
                <p>
                  I don't bill by hour, and I don't have a rate sheet for every type of deliverable.
                </p>
                <p>Why?</p>
                <p>
                  I quote for the value that my work provides—the value you'll get out of having
                  polished copywriting that helps you accomplish your goals in growing your
                  business.
                </p>
                <p>
                  If I bill per hour, that means I work faster—not smarter—to minimize your costs.
                </p>
                <p>
                  With project pricing, we both know exactly what we're going to work on, how much
                  it'll cost, when it'll get done, and what we're hoping to achieve.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="mb-4 px-4 py-2 border rounded">
              <AccordionItemHeading>
                <AccordionItemButton className="text-xl font-medium">
                  Minimum project rates
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="prose mt-4">
                <p>
                  <strong>My minimum project rate for new clients is $3,000.</strong>
                </p>
                <p>
                  One-day plotting sessions are the only exception—these cost $1695 for an 8-hour
                  period of my full attention and focus.
                </p>
                <p>
                  And if all you need is someone to put a spit-shine on an existing sales page, then
                  we're not a good fit!
                </p>
                <p>
                  Think of me—or any copywriter—as a strategic partner, one who goes *deep* on
                  research and plotting your company's growth before putting down a single word.
                </p>
                <p>It takes time and commitment, but it creates results.</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="px-4 py-2 border rounded">
              <AccordionItemHeading>
                <AccordionItemButton className="text-xl font-medium">
                  Timelines &amp; start dates
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="prose mt-4">
                <p>I'm typically booked 2-3 weeks in advance.</p>
                <p>
                  If you need help right now, might I recommend a one-day plotting session day?
                  You'll get to skip the waitlist and get new copywriting within 24 hours.
                </p>
                <p>
                  If you're willing to wait, a 50% deposit is all I need to hold your spot on my
                  calendar to ensure you get my full focus when our day comes.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-8 overflow-hidden -mt-16">
          <InlineWidget
            styles={{
              height: '1080px',
            }}
            url="https://calendly.com/copyplot/introductions"
          />
        </div>
      </div>
    </>
  )
}
