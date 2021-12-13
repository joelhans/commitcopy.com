import { useMemo } from 'react'
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client'
import Image from 'next/image'
import CustomLink from './Link'
import CodeBlock from '@components/mdx/CodeBlock'
import Aside from '@components/mdx/Aside'
import ChecklistProvider from '@components/mdx/ChecklistProvider'
import Checklist from '@components/mdx/Checklist'
import Checkbox from '@components/mdx/Checkbox'
import FontLoader from '@components/mdx/FontLoader'
import Sidenote from '@components/mdx/Sidenote'
import Video from '@components/mdx/Video'
import Statement from '@components/mdx/Statement'
import StoryQuote from '@components/mdx/StoryQuote'
import { Tags, Tag } from '@components/mdx/Tags'
import { Service, ServiceGo, ServicePrice, ServiceButton } from '@components/Service'
import { Grid, Eight } from '@components/Grid'

export const MDXComponents = {
  Image,
  a: CustomLink,
  pre: CodeBlock,
  Aside,
  Checkbox,
  Checklist,
  ChecklistProvider,
  FontLoader,
  Sidenote,
  Video,
  Statement,
  StoryQuote,
  Tags,
  Tag,
  Service,
  ServiceGo,
  ServicePrice,
  ServiceButton,
  Grid,
  Eight,
  // wrapper: ({ components, layout, ...rest }) => {
  //   const Layout = require(`../layouts/${layout}`).default
  //   return <Layout {...rest} />
  // },
}

export const MDXExport = ({ code }) => {
  const mdxExport = getMDXExport(code)
  const Component = useMemo(() => mdxExport.default, [code])

  return <Component components={MDXComponents} />
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}
