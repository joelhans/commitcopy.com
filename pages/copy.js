import React from 'react'
import Image from 'next/image'
import Link from '@components/Link'
import { getSingleContent, getFrontMatter } from '@/lib/mdx'
import { PageSeo } from '@components/SEO'
import { BASE_CONTENT_PATH, WORK_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { MDXExport } from '@components/MDXComponents'
import Container from '@components/Container'
import { Grid, Twelve, Ten, Eight, Four, Six, Two } from '@components/Grid'
import { ServiceGo, ServicePrice, ServiceButton } from '@components/Service'
import { TestimonialHoriz } from '@components/Testimonial'
import ClientLogo from '@components/ClientLogo'

export async function getStaticProps() {
  const ServiceOneDay = await getSingleContent(BASE_CONTENT_PATH, 'services/one-day-commit')
  const projects = await getFrontMatter(WORK_CONTENT_PATH)

  return {
    props: { ServiceOneDay, projects },
  }
}

const WorkItemFull = ({ title, slug, summary, logoSrc, logoWidth, logoHeight }) => (
  <Six
    key={title}
    className="bg-gray-50 dark:bg-gray-700 hover:bg-purple hover:bg-opacity-5 dark:hover:bg-gray-600 rounded-lg transition-all"
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

const WorkItemFeatured = ({ title, slug, summary, logoSrc, logoWidth, logoHeight }) => (
  <Eight
    key={title}
    className="bg-gray-100 dark:bg-gray-700 hover:bg-purple hover:bg-opacity-5 dark:hover:bg-gray-600 rounded-lg transition-all"
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
  </Eight>
)

export default function Copy({ ServiceOneDay, projects }) {
  const { mdxSource: mdxServiceOneDay } = ServiceOneDay

  return (
    <>
      <PageSeo
        title="Messaging + copywriting for open source && cloud native"
        description="Scale your open source && cloud native startup with brand and product messaging to align your business units on what you do and why, or tactical copywriting for your website."
        url={`${siteMetadata.siteUrl}/copy`}
      />
      <header className="mt-24 lg:mt-32 mb-20">
        <Container>
          <Grid className="mb-24">
            <Ten className="prose lg:prose-lg dark:prose-dark">
              <h1 className="!text-purple !leading-tight !font-bold dark:!text-gray-100">
                Scale your open source{' '}
                <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-lg">
                  &&
                </span>{' '}
                cloud native startup with messaging and copywriting
              </h1>
              <p>
                Most open source && cloud native projects and products require a heavy dose of
                commitment just to <span>get through the "getting started" guide</span>. We're
                talking big steps, like reconfiguring a production environment or CI/CD workflow,
                for your target audience get a proper demo and figure out whether what you do is
                right for them.
              </p>
              <p>Inspiring that first commitment can go wrong in so many ways:</p>
              <div className="lg:grid grid-cols-2 gap-4">
                <ul className="text-base !my-0">
                  <li>
                    Your project doesn't stand out among the crowded landscape of open source &&
                    cloud native
                  </li>
                  <li>
                    Users don't understand the difference between your open source project and
                    commercial product
                  </li>
                </ul>
                <ul className="text-base !my-0">
                  <li>
                    A vague monetization strategy and ongoing commitment to open source tarnishes
                    developer trust
                  </li>
                  <li>
                    You're getting free users, but not product champions within external developer
                    communities
                  </li>
                </ul>
              </div>
              <p>
                If any of these sound familiar, messaging and copywriting are your path toward
                generating commitment. We're not talking hard-sell "conversion copywriting" (aka
                suckering your target audience into clicking on a call-to-action button or filling
                out a form), but rather messaging and copywriting that captures and uplevels your
                stand-out product vision for the unique qualities of the open source && cloud native
                communities.
              </p>
              <p>
                Let's start increasing conversions and growing your startup with ready-to-launch
                messaging and copywriting that gets developers and engineering leaders to{' '}
                <span className="text-sea font-bold">care</span> about what you do before they{' '}
                <span className="text-orange font-bold">click</span>.
              </p>
            </Ten>
          </Grid>
        </Container>
      </header>
      <section className="relative z-10 py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <Grid>
            <Eight className="prose lg:prose-lg dark:prose-dark">
              <h2 className="!text-orange !text-2xl lg:!text-3xl !font-medium">
                Brand and product messaging
              </h2>
              <p>
                <span className="text-xl font-medium">
                  Not sure how to talk about your tech? Let's find the source of what makes you
                  unique and develop a messaging playbook that defines what makes your products
                  worthy of immediate committment.
                </span>
              </p>
              <p>
                You walk away with ready-to-deploy messaging your people can leverage to communicate
                cohesively no matter their role or where they show up:
              </p>
              <ul className="text-base">
                <li>
                  <span className="text-purple font-medium">Developers</span> engaging with your
                  open source community through GitHub issues and Slack/Discord messages.
                </li>
                <li>
                  <span className="text-purple font-medium">
                    Salespeople and technical engineers
                  </span>{' '}
                  demo-ing your open source project and commercial counterpart to prospects.
                </li>
                <li>
                  <span className="text-purple font-medium">Product marketers</span> writing
                  consistent copy in high-value assets like your homepage, GitHub README, and
                  landing pages.
                </li>
                <li>
                  <span className="text-purple font-medium">Content leads</span> developing
                  product-led strategies that highlight product pillars in{' '}
                  <Link href="/content/">technical essays and tactical how-tos</Link>.
                </li>
                <li>
                  <span className="text-purple font-medium">DevRels and advocates</span> presenting
                  about your open source ethos and technical prowess at conferences or in podcasts.
                </li>
                <li>
                  <span className="text-purple font-medium">Founders and executives</span> pitching
                  your product for venture capital and strategic partnerships.
                </li>
              </ul>
              <p>
                A messaging project results in research collateral and a comprehensive framework
                document with the following strategic assets:
              </p>
              <ul className="text-base">
                <li>
                  A guiding and inspiring <Link href="/articles/brand-story/">brand story</Link>
                </li>
                <li>
                  Company values, mission{' '}
                  <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded-lg">
                    &&
                  </span>{' '}
                  vision statements, and voice{' '}
                  <span className="text-orange text-mono font-bold bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded-lg">
                    &&
                  </span>{' '}
                  tone standards
                </li>
                <li>Detailed personas based on Voice of Customer/Developer research</li>
                <li>
                  Example messaging built on your value pillars, supporting evidence from your
                  project/product, and reflected through the needs of each persona
                </li>
                <li>
                  Ready-for-you marketing boilerplate to use on your website, GitHub, ProductHunt,
                  Hacker News, or anywhere else your tech brand shows up
                </li>
              </ul>
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
          <Grid className="items-center mt-16">
            <Four className="">
              <h3 className="text-sea text-3xl lg:text-5xl font-medium leading-tight">
                Featured messaging project:
              </h3>
            </Four>
            <WorkItemFeatured
              key={projects[0].slug}
              title={projects[0].title}
              slug={projects[0].slug}
              summary={projects[0].summary}
              logoSrc={projects[0].logoSrc}
              logoWidth={projects[0].logoWidth}
              logoHeight={projects[0].logoHeight}
              className="bg-black"
            />
          </Grid>
        </Container>
      </section>
      <section className="relative z-10 py-24 bg-gray-100 dark:bg-gray-900">
        <Container>
          <Grid>
            <Eight className="prose lg:prose-lg dark:prose-dark">
              <h2 className="!text-orange !text-2xl lg:!text-3xl !font-medium">Copywriting</h2>
              <p>
                Let's transform your tech- and features-driven website into an engaging vision of
                what your ideal customers become when they have your product in their back pocket.
              </p>
              <p>
                When you lead with inspiration, education, and problem-solving—not marketing
                gimmicks—you generate the commitment your developer marketing plans demand.
                Commitment to sign up. To champion your product. To not just be a one-off
                conversion, but a long-term partner.
              </p>
              <p>A website copy project includes:</p>
              <ul className="text-base">
                <li>
                  Exhaustive research into the real business problems your ideal customers face via
                  competitive research and interviews with internal stakeholders and existing
                  customers
                </li>
                <li>Copywriting for all of your key pages, including two rounds of revision</li>
                <li>
                  Full coordination with your marketing and/or development teams to properly
                  implement your new messaging
                </li>
              </ul>
            </Eight>
            <Four className="hidden md:block text-center">
              <Image
                className="opacity-50"
                src="/static/images/services-website.svg"
                alt="Website copy"
                width={52}
                height={165}
              />
            </Four>
          </Grid>
        </Container>
      </section>
      <section id="portfolio" className="py-24 dark:bg-gray-800">
        <Container>
          <Grid className="prose lg:prose-lg dark:prose-dark mb-12">
            <Twelve>
              <h2 className="!text-purple !leading-tight font-medium dark:!text-gray-100">
                Key samples of my messaging and copywriting work:
              </h2>
            </Twelve>
          </Grid>
          <Grid className="items-stretch">
            {projects.slice(1).map((project) => {
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
          <p className="text-purple dark:text-gray-50 text-lg font-medium mt-8 italic text-center">
            More samples available upon request.
          </p>
        </Container>
      </section>
      <section className="py-24 bg-gray-50 dark:bg-gray-700">
        <Container>
          <Grid>
            <Twelve>
              <TestimonialHoriz
                name="Jennifer Briston"
                title="Marketing Manager, Netdata"
                img="jennifer-briston.jpg"
              >
                Joel did an amazing job with collaborating on creating the Netdata website. He has a
                unique skillset of understanding technical products with the ability to translate
                the value to a wide range of audiences. I'd gladly work with Joel again, he goes out
                of his way to provide his team support and the materials needed to execute projects.{' '}
                <br />
                <br />
                Super professional, friendly, and overall delightful to work with. He is really
                knowledgeable in the tech space with the skills of a great writer, a rare gem. He'll
                go above and beyond your expectations!
              </TestimonialHoriz>
            </Twelve>
          </Grid>
        </Container>
      </section>
      <section id="one-day-commit" className="py-16 bg-gray-100 dark:bg-gray-800">
        <Container>
          <Grid>
            <Eight>
              <h2 className="text-purple dark:text-gray-50 text-lg lg:text-xl font-bold uppercase leading-snug">
                Need copy <em>right now</em>? Not ready for a full copywriting project?
              </h2>
              <h3 className="text-orange text-4xl lg:text-5xl font-mono font-bold mt-8 mb-8">
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
