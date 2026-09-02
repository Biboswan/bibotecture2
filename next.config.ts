import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  reactStrictMode: false,
  transpilePackages: ["unframer"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/chatcoach/:path*",
        destination: "https://usecueset.com/:path*",
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  options: {},
})

export default withMDX(nextConfig)
