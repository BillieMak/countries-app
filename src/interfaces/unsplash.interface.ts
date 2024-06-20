export interface UnsplashResponse {
  total: number
  total_pages: number
  page: number
  results?: ResultsEntity[] | null
  prev_page: string
  next_page: string
}
export interface ResultsEntity {
  id: string
  created_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  liked_by_user: boolean
  description: string
  tags?: string[] | null
  exif: Exif
  comments?: CommentsEntity[] | null
  user: User
  current_user_collections?: null[] | null
  urls: Urls
  links: Links
}
export interface Exif {
  make: string
  model: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}
export interface CommentsEntity {
  user: string
  comment: string
}
export interface User {
  id: string
  username: string
  name: string
  first_name: string
  last_name: string
  instagram_username: string
  twitter_username: string
  portfolio_url: string
  profile_image: ProfileImage
  links: Links1
}
export interface ProfileImage {
  small: string
  medium: string
  large: string
}
export interface Links1 {
  self: string
  html: string
  photos: string
  likes: string
}
export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}
export interface Links {
  self: string
  html: string
  download: string
}
