import { FC, ReactNode } from 'react'
import styles from './Layout.module.css'
import WALLPAPER from '../../assets/images/wallpaper2.jpg'
import Image from 'next/image'
import { IAlbum } from '../../types/api'
import AlbumInformation from '../AlbumInformation/AlbumInformation'
import { Box, Flex } from '@mantine/core'

interface IProps {
  children: ReactNode
  albumData: IAlbum
}

const Layout: FC<IProps> = (props) => {
  return (
    <div className={styles.layout}>
      <Box h={'500px'} className={styles.layout_background}>
        <Flex
          h={'100px'}
          p={25}
          align={'center'}
          justify={'flex-start'}
          className={styles.layout_background_content}
        >
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
