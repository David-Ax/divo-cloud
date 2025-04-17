import { FC, useEffect, useState } from 'react'
import { Avatar, Badge, Box, Divider, Flex, Stack, Text } from '@mantine/core'
import { IAlbum, IAlbumResponse } from '../../types/api'
import AlbumGallery from '../../components/AlbumGallery/AlbumGallery'
import Header from '../../components/Header/Header'

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
    <Box>
      <Header />
      <Stack
        p={{
          base: '10px',
          sm: '20px',
          lg: '30px',
        }}
      >
        <Flex gap={10} align={'center'} justify={'space-between'}>
          <Stack gap={0}>
            <Badge variant={'light'} color={'green'}>
              Kostenlos
            </Badge>
            <Text fw={600} size={'1.5rem'}>
              DIVO-Cloud
            </Text>
            <Text size={'sm'} c={'var(--app-theme-8)'}>
              {albumData.length} {albumData.length < 1 ? 'Verfügbares Album' : 'Verfügbare Alben'}
            </Text>
          </Stack>
          <Flex gap={10} align={'center'}>
            <Text ta={'right'} size={'sm'} c={'var(--app-theme-8)'}>
              Max Mustermann
            </Text>
            <Avatar />
          </Flex>
        </Flex>

        <Divider />
        <AlbumGallery albumData={albumData} />
      </Stack>
    </Box>
  )
}

export default Start
