import { FC } from 'react'
import styles from './AlbumGallery.module.css'
import { IAlbum } from '../../types/api'
import Link from 'next/link'
import { Badge, Box, Paper, SimpleGrid, Stack, Text } from '@mantine/core'
import Image from 'next/image'

interface IProps {
  albumData: IAlbum[]
}

const AlbumGallery: FC<IProps> = (props) => {
  return (
    <SimpleGrid cols={{ base: 2, md: 3 }}>
      {props.albumData.map((album: IAlbum, index: number) => {
        return (
          <Link style={{ textDecoration: 'none' }} href={`/album/${album.id}`} key={index}>
            <Paper h={'100%'} className={styles.album} radius={10} p={10} bg={'var(--app-theme-2)'}>
              <Box h={{ base: 100, sm: 150, md: 250 }}>
                <Image
                  src={album.images[0].url}
                  alt={album.images[0].filename}
                  quality={30}
                  width={600}
                  height={100}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                />
              </Box>
              <Badge variant={'light'} color={'green'}>
                Verfügbar
              </Badge>
              <Stack ml={'5px'} gap={0}>
                <Text c={'var(--app-theme-9)'} fw={500}>
                  {album.title}
                </Text>
                <Text size={'sm'} c={'var(--app-theme-7)'} fw={300}>
                  {album.images.length} {album.images.length > 1 ? 'Bilder' : 'Bild'}
                </Text>
              </Stack>
            </Paper>
          </Link>
        )
      })}
    </SimpleGrid>
  )
}

export default AlbumGallery
