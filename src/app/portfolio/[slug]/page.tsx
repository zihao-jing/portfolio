import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { getPortfolioItem, getPortfolioItems } from '@/lib/mdx'
import { BlogPlaceholder } from '@/components/ui/blog-placeholder'
import { mdxComponents } from '@/components/mdx/mdx-components'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Brain, Database, Video, ImageIcon, SlidersHorizontal } from 'lucide-react'
import { BackButton } from './back-button'
import type { Metadata } from 'next'


type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const item = await getPortfolioItem(slug)
  if (!item) return {}

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      type: 'article',
      images: item.image ? [{ url: item.image, width: 1200, height: 630, alt: item.title }] : [],
    },
  }
}

export default async function PortfolioItemPage({ params }: { params: Params }) {
  const { slug } = await params
  const item = await getPortfolioItem(slug)
  if (!item) return notFound()

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <BackButton />

        {/* Cover image */}
        <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <BlogPlaceholder title={item.title} />
          )}
        </div>

        {/* Header */}
        <h1 className="mb-2 text-4xl font-bold">{item.title}</h1>
        <p className="text-lg text-primary font-medium mb-4">{item.venue}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.tags.map((tag) => (
            <span key={tag} className="inline-block px-2 py-1 text-xs rounded-md bg-muted font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-10">
          {item.paper && (
            <Link href={item.paper} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Paper
              </Button>
            </Link>
          )}
          {item.github && (
            <Link href={item.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            </Link>
          )}
          {item.model && (
            <Link href={item.model} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Brain className="h-4 w-4 mr-2" />
                Model
              </Button>
            </Link>
          )}
          {item.dataset && (
            <Link href={item.dataset} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Database className="h-4 w-4 mr-2" />
                Dataset
              </Button>
            </Link>
          )}
          {item.video && (
            <Link href={item.video} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Video className="h-4 w-4 mr-2" />
                Video
              </Button>
            </Link>
          )}
          {item.poster && (
            <Link href={item.poster} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <ImageIcon className="h-4 w-4 mr-2" />
                Poster
              </Button>
            </Link>
          )}
          {item.slides && (
            <Link href={item.slides} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Slides
              </Button>
            </Link>
          )}
        </div>

        {/* MDX body */}
        <div className="prose prose-gray dark:prose-invert max-w-none text-justify">
          <MDXRemote
            source={item.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm, remarkMath], rehypePlugins: [rehypeKatex] } }}
          />
        </div>
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  const items = await getPortfolioItems()
  return items.map((item) => ({ slug: item.slug }))
}
