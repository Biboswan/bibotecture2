import type { MetadataRoute } from "next"
import { allBlogs } from "@/app/blog/data"
import config from "@/config"

const { baseUrl } = config

export const dynamic = "force-dynamic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/chatcoach/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terms-of-service/`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ]

  const blogRoutes = allBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}/`,
    lastModified: new Date(blog.publishedOn),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
