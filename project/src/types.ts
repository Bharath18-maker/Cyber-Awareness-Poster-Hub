export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Poster {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  imageUrl: string;
  thumbnailUrl: string;
  downloadCount: number;
  tags: string[];
  createdAt: string;
}
