export type Category = 'landscape' | 'portrait' | 'street' | 'architecture' | 'monochrome';

export interface Photo {
  id: string;
  title: string;
  category: Category;
  url: string;
  thumbnail: string;
  description?: string;
  exif: {
    camera: string;
    lens: string;
    aperture: string;
    shutterSpeed: string;
    iso: number;
    focalLength: string;
  };
  location?: string;
  shootDate: string;
  featured: boolean;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  nameEn: string;
  description: string;
  coverImage: string;
}
