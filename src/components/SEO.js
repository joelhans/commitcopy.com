import { NextSeo, ArticleJsonLd } from 'next-seo'
import siteMetadata from '@data/siteMetadata'
import { useRouter } from 'next/router'

export const SEO = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: 'website',
    locale: siteMetadata.language,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
        alt: siteMetadata.title,
        width: 1200,
        height: 600,
      },
    ],
  },
  twitter: {
    handle: siteMetadata.twitter,
    site: siteMetadata.twitter,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteMetadata.author,
    },
  ],
}

export const PageSeo = ({ title, description, url }) => {
  const router = useRouter()
  const path = router.query

  return (
    <NextSeo
      title={`${router.asPath === '/' ? '' : `${title} •`} ${siteMetadata.title}`}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
  )
}

export const TagSEO = ({ title, description, url }) => {
  // const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  // const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const router = useRouter()
  return (
    <NextSeo
      title={`${router.asPath === '/' ? '' : `${title} •`} ${siteMetadata.title}`}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
  )

  // return (
  //   <>
  //     <CommonSEO
  //       title={title}
  //       description={description}
  //       ogType="website"
  //       ogImage={ogImageUrl}
  //       twImage={twImageUrl}
  //     />
  //     <Head>
  //       <link
  //         rel="alternate"
  //         type="application/rss+xml"
  //         title={`${description} - RSS feed`}
  //         href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
  //       />
  //     </Head>
  //   </>
  // )
}

export const BlogSeo = ({ title, summary, publishedOn, updatedOn, url, tags, images = [] }) => {
  let imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images

  const featuredImages = imagesArr.map((img) => {
    return {
      url: `${siteMetadata.siteUrl}${img}`,
      alt: title,
    }
  })

  return (
    <>
      <NextSeo
        title={`${title} • ${siteMetadata.title}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedOn,
            modifiedTime: updatedOn,
            authors: [`${siteMetadata.siteUrl}/about`],
            tags,
          },
          url,
          title,
          description: summary,
          images: featuredImages,
        }}
        additionalMetaTags={[
          {
            name: 'twitter:image',
            content: featuredImages[0].url,
          },
        ]}
      />
      <ArticleJsonLd
        authorName={siteMetadata.author}
        dateModified={publishedOn}
        datePublished={updatedOn}
        description={summary}
        images={featuredImages}
        publisherName={siteMetadata.author}
        title={title}
        url={url}
      />
    </>
  )
}
