'use client'
import React, { FC, ReactNode } from 'react'
import { createTheme, CSSVariablesResolver, MantineProvider } from '@mantine/core'
import { DARK_MODE, LIGHT_MODE } from '../../assets/colors/colors'

interface IProps {
  children: ReactNode
}

const resolver: CSSVariablesResolver = () => ({
  variables: {
    '--border_radius_0': '10px',
  },
  light: LIGHT_MODE.reduce(
    (acc, color, index) => ({ ...acc, [`--app-theme-${index}`]: color }),
    {},
  ),
  dark: DARK_MODE.reduce((acc, color, index) => ({ ...acc, [`--app-theme-${index}`]: color }), {}),
})

const theme: object = createTheme({
  fontFamily: 'Rubik',
  white: '#fff',
  black: '#000',
  colors: {
    light_mode: LIGHT_MODE,
    dark_mode: DARK_MODE,
  },
  fontSizes: {
    xs: '0.80rem',
    sm: '0.90rem',
    md: '1.1rem',
    lg: '1.3rem',
    xl: '1.5rem',
  },
  breakpoints: {
    xs: '375px',
    sm: '425px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
  components: {},
})

const Mantine: FC<IProps> = (props) => {
  return (
    <MantineProvider cssVariablesResolver={resolver} theme={theme}>
      {props.children}
    </MantineProvider>
  )
}

export default Mantine
