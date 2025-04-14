import React from 'react'
import './styles.css'
import '@mantine/core/styles.css'
import { mantineHtmlProps } from '@mantine/core'
import '../assets/styles/variables.css'
import '../assets/styles/main.css'
import '@mantine/carousel/styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'DiVo-Cloud',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" {...mantineHtmlProps}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
