import { FC, ReactNode } from 'react'
import styles from './Layout.module.css'
import WALLPAPER from '../../assets/images/wallpaper2.jpg'
import Image from 'next/image'
import { IAlbum } from '../../types/api'
import AlbumInformation from '../AlbumInformation/AlbumInformation'
import { Anchor, Box, Breadcrumbs, Flex } from '@mantine/core'
import Link from 'next/link'
import { IconChevronLeft, IconSlash } from '@tabler/icons-react'

interface IProps {
  children: ReactNode
  albumData: IAlbum
}

const Layout: FC<IProps> = (props) => {
  const items = [
    { title: 'Album', href: '/' },
    { title: props.albumData.title, href: '/' + props.albumData.id },
  ].map((item, index) => (
    <Anchor fw={400} c={'var(--app-theme-1)'} size={'sm'} href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))
  return (
    <div className={styles.layout}>
      <Box h={'350px'} className={styles.layout_background}>
        <Flex
          h={'100%'}
          align={'center'}
          justify={'flex-start'}
          className={styles.layout_background_content}
        >
          <Flex gap={10} className={styles.layout_back} align={'center'} justify={'flex-start'}>
            <Link href={'/'}>
              <IconChevronLeft size={30} color={'var(--app-theme-1)'} />
            </Link>
            <Breadcrumbs
              separatorMargin={5}
              separator={<IconSlash color={'var(--app-theme-8)'} />}
              mb="5px"
            >
              {items}
            </Breadcrumbs>
          </Flex>
          <AlbumInformation albumData={props.albumData} />
        </Flex>
        <Image
          src={WALLPAPER}
          alt={'x'}
          loading="lazy"
          width={400}
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
