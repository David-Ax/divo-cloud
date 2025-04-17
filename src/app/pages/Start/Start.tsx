import { FC, useEffect, useState } from 'react'
import { Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { IAlbum, IAlbumResponse } from '../../types/api'
import Image from 'next/image'
import styles from './Start.module.css'
import Link from 'next/link'

interface IProps {}

const Start: FC<IProps> = (props) => {
  const [albumData, setAlbumData] = useState<IAlbum[]>()

  useEffect(() => {
    const fetchPhotoshoot = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/album')
        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Daten: ${response.statusText}`)
        }
        const data: IAlbumResponse = await response.json()
        setAlbumData(data.docs)
      } catch (err) {
        console.error('Fehler:', err)
      } finally {
      }
    }

    fetchPhotoshoot()
  }, [])
  if (!albumData) {
    return
  }
  return (
    <Stack p={'25px 50px'}>
      <Stack gap={0}>
        <Title order={1}>DiVo-Cloud</Title>
        <Text>Verfügbare Alben</Text>
      </Stack>
      <SimpleGrid cols={4}>
        {albumData.map((album: IAlbum, index: number) => {
          return (
            <Link href={`/album/${album.id}`} key={index}>
              <Paper className={styles.album} radius={10} p={10} bg={'var(--app-theme-1)'}>
                <Image
                  src={album.images[0].url}
                  alt={album.images[0].filename}
                  quality={50}
                  width={400}
                  height={300}
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <Stack gap={0}>
                  <Text c={'var(--app-theme-9)'} fw={500}>
                    {album.title}
                  </Text>
                  <Text c={'var(--app-theme-7)'} fw={300}>
                    {album.images.length} {album.images.length > 1 ? 'Bilder' : 'Bild'}
                  </Text>
                </Stack>
              </Paper>
            </Link>
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default Start
