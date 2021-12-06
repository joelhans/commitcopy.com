const siteMetadata = {
  title: 'Commit Copy | Copywriting for open-source companies',
  author: 'Commit Copy & Joel Hans',
  headerTitle: 'Commit Copy',
  description:
    "I'm Joel—the open-source copywriter for companies & startups building future-enriching products with transparency.",
  language: 'en-us',
  siteUrl: 'https://commitcopy.com',
  siteRepo: 'https://github.com/joelhans/joelhans.com',
  siteLogo: '/static/favicons/favicon-512x512.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'j@joelhans.com',
  github: 'https://github.com/joelhans',
  twitter: 'https://twitter.com/joelhans',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/joel-hans/',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: 'commitcopy.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'convertkit',
  },
}

module.exports = siteMetadata
