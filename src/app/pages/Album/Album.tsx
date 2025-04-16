import { FC, useEffect, useState } from 'react'
import styles from './Album.module.css'
import AlbumInformation from '../../components/AlbumInformation/AlbumInformation'
import AlbumGallery from '../../components/AlbumGallery/AlbumGallery'
import { Divider, Stack } from '@mantine/core'
import { IAlbum, IAlbumResponse } from '../../types/api'

interface IProps {}

const Album: FC<IProps> = () => {
  const [albumData, setAlbumData] = useState<IAlbum[]>([])
  const [activeTab, setActiveTab] = useState<string>(albumData?.[0]?.id || '')

  useEffect(() => {
    const fetchPhotoshoot = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/album')
        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Daten: ${response.statusText}`)
        }
        const data: IAlbumResponse = await response.json()
        setAlbumData(data.docs)
        if (activeTab === '') {
          setActiveTab(data.docs[0].id)
        }
      } catch (err) {
        console.error('Fehler:', err)
      } finally {
      }
    }

    fetchPhotoshoot()
  }, [activeTab])

  return (
    <Stack gap={0} c={'var(--app-theme-9)'} className={styles.album}>
      {/*<Flex gap={5} bg={'var(--app-theme-0)'} className={styles.album_head}>*/}
      {/*  {albumData?.map((album) => (*/}
      {/*    <Button*/}
      {/*      key={album.id}*/}
      {/*      radius={'10px 10px 0 0'}*/}
      {/*      fw={activeTab === album.id ? '400' : '300'}*/}
      {/*      c={activeTab === album.id ? 'var(--app-theme-9)' : 'var(--app-theme-7)'}*/}
      {/*      bg={activeTab === album.id ? 'var(--app-theme-2)' : 'var(--app-theme-1)'}*/}
      {/*      onClick={() => setActiveTab(album.id)}*/}
      {/*    >*/}
      {/*      {album.title}*/}
      {/*    </Button>*/}
      {/*  ))}*/}
      {/*</Flex>*/}

      <Stack className={styles.album_content}>
        {albumData?.map((albumItem) =>
          albumItem.id === activeTab ? (
            <Stack gap={15} key={albumItem.id}>
              <AlbumInformation albumData={albumItem} />
              <Divider my="md" />
              <AlbumGallery albumData={albumItem} />
            </Stack>
          ) : null,
        )}
      </Stack>
    </Stack>
  )
}

export default Album
