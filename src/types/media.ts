// Shared types for media and influencer data

export interface BaseMediaItem {
  id: number;
  name: string;
  status: 'Active' | 'Pending' | 'Completed';
  location?: string;
  price?: string | number;
}

export interface TraditionalMediaItem extends BaseMediaItem {
  category: string;
  area?: number;
  views?: number;
  circulation?: string;
  publishDate?: string;
  section?: string;
  size?: string;
  description?: string;
}

export interface BillboardItem extends TraditionalMediaItem {
  code: string;
  lat: number;
  long: number;
  street: string;
  district: string;
  avenue: string;
  images: string[];
  pricePerView: number;
}

export interface LiftboardItem extends TraditionalMediaItem {
  code: string;
  latitude: number;
  longitude: number;
  floor: string;
  building: string;
  pricePerView: number;
  street: string;
  district: string;
  avenue: string;
}

export interface InfluencerItem extends BaseMediaItem {
  username: string;
  category: string;
  followers: number;
  engagement: number;
  pricePerPost: number;
  verified: boolean;
  description?: string;
  contact?: string;
  languages?: string[];
  specialties?: string[];
  lastPost?: string;
  avgLikes?: number;
  avgComments?: number;
}

export interface YouTubeInfluencerItem extends InfluencerItem {
  channelName: string;
  subscribers: number;
  avgViews: number;
  pricePerVideo: number;
}

export interface FacebookInfluencerItem extends InfluencerItem {
  pageName: string;
}

export interface TikTokInfluencerItem extends InfluencerItem {
  avgViews: number;
  pricePerVideo: number;
}

export interface FilterState {
  selectedCategory: string;
  searchTerm: string;
  statusFilter: string;
  [key: string]: string;
}

export interface ListPageProps<T> {
  items: T[];
  title: string;
  themeColor: string;
  categories: string[];
  onItemClick?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}
