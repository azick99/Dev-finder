export interface ThemeProp {
  theme: boolean
}

export type Developer = {
  id: number
  login: string
  avatar_url: string | null
  name: string | null
  bio: string | null
  location: string | null
  company: string | null
  blog: string | null
  twitter_username: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

// get Data utils

export const getData = async <T>(url: string): Promise<T> => {
  const respnse = await fetch(url)
  return respnse.json()
}

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
