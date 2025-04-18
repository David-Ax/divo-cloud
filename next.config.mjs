import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Your Next.js config here
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
