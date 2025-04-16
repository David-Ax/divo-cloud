import { FC, ReactNode } from 'react'
import styles from './Layout.module.css'
import WALLPAPER from '../../assets/images/wallpaper2.jpg'
import Image from 'next/image'

interface IProps {
  children: ReactNode
}

const Layout: FC<IProps> = (props) => {
  return (
    <div className={styles.layout}>
      <Image
        src={WALLPAPER}
        alt={'x'}
        loading="lazy"
        width={400}
        height={300}
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
