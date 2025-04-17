'use client'

import { use, useEffect, useState } from 'react'
import styles from './Album.module.css'
import { Center, Loader, Stack } from '@mantine/core'
import { IAlbum } from '../../../types/api'
import Layout from '../../../components/Layout/Layout'
import ImageGallery from '../../../components/ImageGallery/ImageGallery'
import { useRouter } from 'next/navigation'

interface Props {
  params: Promise<{ id: string }>
}

export default function Page({ params }: Props) {
  const { id } = use(params)
  const router = useRouter()

  const [albumData, setAlbumData] = useState<IAlbum | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    if (!isLoggedIn) {
      router.push('/')
      return
    }

    const fetchPhotoshoot = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/album/${id}`, {
          credentials: 'include',
        })

        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Daten: ${response.statusText}`)
        }

        const data: IAlbum = await response.json()
        setAlbumData(data)
      } catch (err) {
        console.error('Fehler:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotoshoot()
  }, [id, router])

  if (loading || !albumData) {
    return (
      <Center bg={'var(--app-theme-0)'} style={{ height: '100vh' }}>
        <Loader size="lg" color="var(--app-theme-9)" />
      </Center>
    )
  }

  return (
    <Layout albumData={albumData}>
      <Stack gap={0} c={'var(--app-theme-9)'} className={styles.album}>
        <Stack p={'25'} className={styles.album_content}>
          <ImageGallery albumData={albumData} />
        </Stack>
      </Stack>
    </Layout>
  )
}
