export interface User {
  firstName: string
  lastName: string
  email: string
  bio: string
  location: string
  website: string
  isPro: boolean
}

export interface Stats {
  totalPosts: number
  engagementRate: number
  profileViews: number
  changes: {
    posts: string
    engagement: string
    views: string
  }
}