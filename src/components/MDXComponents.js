import { useMemo } from 'react'
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client'
import Image from 'next/image'
import CustomLink from './Link'
import { Service, ServiceGo, ServicePrice, ServiceButton } from '@components/Service'
import { Grid, Eight } from '@components/Grid'
import FullImage from '@components/mdx/FullImage'

export const MDXComponents = {
  Image,
  a: CustomLink,
  Service,
  ServiceGo,
  ServicePrice,
  ServiceButton,
  Grid,
  Eight,
  FullImage,
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
