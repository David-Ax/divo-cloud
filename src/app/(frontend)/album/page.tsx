'use client'

import { useEffect, useState } from 'react'
import { IAlbum, IAlbumResponse } from '../../types/api'
import { useRouter } from 'next/navigation'
import { Avatar, Badge, Box, Button, Divider, Flex, HoverCard, Stack, Text } from '@mantine/core'
import Header from '../../components/Header/Header'
import AlbumGallery from '../../components/AlbumGallery/AlbumGallery'

export default function AlbumPage() {
  const [albumData, setAlbumData] = useState<IAlbum[]>()
  const router = useRouter()

  useEffect(() => {
    const fetchPhotoshoot = async () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn')
      if (!isLoggedIn) {
        router.push('/')
        return
      }

      try {
        const response = await fetch('http://localhost:3000/api/album', {
          credentials: 'include',
        })

        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Daten: ${response.statusText}`)
        }

        const data: IAlbumResponse = await response.json()
        setAlbumData(data.docs)
      } catch (err) {
        console.error('Fehler:', err)
      }
    }

    fetchPhotoshoot()
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    router.push('/')
  }

  if (!albumData) return null

  const userName = localStorage.getItem('email') || 'Benutzer'

  return (
    <Box>
      <Header />
      <Stack p={{ base: '10px', sm: '20px', lg: '30px' }}>
        <Flex gap={10} align="center" justify="space-between">
          <Stack gap={0}>
            <Badge variant="light" color="green">
              Kostenlos
            </Badge>
            <Text fw={600} size="1.5rem">
              DIVO-Cloud
            </Text>
            <Text size="sm" c="var(--app-theme-8)">
              {albumData.length} {albumData.length === 1 ? 'Verfügbares Album' : 'Verfügbare Alben'}
            </Text>
          </Stack>
          <Flex gap={10} align="center">
            <Text ta="right" size="sm" c="var(--app-theme-8)">
              {userName}
            </Text>
            <HoverCard shadow="md">
              <HoverCard.Target>
                <Avatar />
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Stack gap={0}>
                  <Text ta="center" size="sm" c="var(--app-theme-8)">
                    Melden Sie sich ab:
                  </Text>
                  <Button onClick={() => handleLogout()} variant={'light'} color={'red'}>
                    Abmelden
                  </Button>
                </Stack>
              </HoverCard.Dropdown>
            </HoverCard>
          </Flex>
        </Flex>
        <Divider />
        <AlbumGallery albumData={albumData} />
      </Stack>
    </Box>
  )
}
