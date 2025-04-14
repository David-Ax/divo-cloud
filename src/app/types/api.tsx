export interface IImage {
  createdAt: string
  updatedAt: string
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  focalX: number
  focalY: number
  id: string
  url: string
  thumbnailURL: string | null
}

export interface IAlbum {
  createdAt: string
  updatedAt: string
  title: string
  password: string
  shootDate: string
  location: string
  images: IImage[]
  description: string
  id: string
}

export interface IAlbumResponse {
  docs: IAlbum[]
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: number | null
  page: number
  pagingCounter: number
  prevPage: number | null
  totalDocs: number
  totalPages: number
}
