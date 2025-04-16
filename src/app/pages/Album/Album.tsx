import { FC, useEffect, useState } from 'react'
import styles from './Album.module.css'
import AlbumGallery from '../../components/AlbumGallery/AlbumGallery'
import { Stack } from '@mantine/core'
import { IAlbum, IAlbumResponse } from '../../types/api'
import Layout from '../../components/Layout/Layout'

interface IProps {}

const Album: FC<IProps> = () => {
  const [albumData, setAlbumData] = useState<IAlbum>()

  useEffect(() => {
    const fetchPhotoshoot = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/album')
        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Daten: ${response.statusText}`)
        }
        const data: IAlbumResponse = await response.json()
        setAlbumData(data.docs[0])
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
    <Layout albumData={albumData}>
      <Stack gap={0} c={'var(--app-theme-9)'} className={styles.album}>
        <Stack p={'25'} className={styles.album_content}>
          <AlbumGallery albumData={albumData} />
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Album
