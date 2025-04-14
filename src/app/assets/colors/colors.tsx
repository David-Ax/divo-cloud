import { MantineColorsTuple } from '@mantine/core'

const LIGHT_MODE: MantineColorsTuple = [
  '#fefefe', // fast reines Weiß
  '#f9f9f9', // sehr helles, sanftes Off-White
  '#f2f2f2', // leicht getöntes Weiß (minimal warm)
  '#eaeaea', // modernes Hellgrau mit einem Hauch Wärme
  '#dcdcdc', // neutrale Basis
  '#c8c8c8', // klassisches Grau
  '#b0b0b0', // stärkerer Grauanteil
  '#999999', // für Textelemente mit Kontrast
  '#6f6f6f', // dunkleres UI-Grau
  '#070707', // fast anthrazit – als starker Akzent
]

const DARK_MODE: MantineColorsTuple = [
  '#161616',
  '#1c1c1c',
  '#232323',
  '#2a2a2a',
  '#404040',
  '#595959',
  '#737373',
  '#8c8c8c',
  '#bfbfbf',
  '#f5f5f5',
]

export { DARK_MODE, LIGHT_MODE }
